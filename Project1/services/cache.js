const mongoose = require('mongoose');
const util = require('util');

const redis = require('redis')
const redisUrl = 'redis://127.0.0.1:6379'
const client = redis.createClient(redisUrl);
client.hmget = util.promisify(client.hmget)
const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function(options= {}){
   this.useCache = true;
   this.hashKey = JSON.stringify(options.key || '');
   return this;
}

mongoose.Query.prototype.exec =async function () {
   if(!this.useCache){
      return  exec.apply(this, arguments)
   }
   const key = JSON.stringify(Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name
   })) 

   const cacheValue = await client.hmget(this.hashKey , key)
   if (cacheValue[0]) {
      const doc =  JSON.parse(cacheValue)
      console.log(doc)
      return Array.isArray(doc)
         ? doc.map(d => new this.model(d))
         : new this.model(doc)
   }
   const result = await exec.apply(this, arguments)
   const newHash = await client.hmset(this.hashKey, key, JSON.stringify(result));
   client.expire(this.hashKey , 100)

   return result
}

module.exports = {
   clearHash(hashKey){
      client.del(JSON.stringify(hashKey));
   }
}