const redis = require('redis');

const client =  redis.createClient({
   host: 'localhost', // Redis server host
   port: 6379, // Redis server port
   legacyMode :true
});

client.connect().catch(console.error)

client.on('connect', () => {
   console.log('Connected to Redis server');
});

//Setting the Key value
client.set('myKey', 'myValue', (err, reply) => {
   if (err) {
      console.error(err);
   } else {
      console.log(reply); // Output: OK
   }
});

client.set('myKey1', 'myValue1', (err, reply) => {
   if (err) {
      console.error(err);
   } else {
      console.log(reply); // Output: OK
   }
});

//Setting Expire time 
client.expire('mykey', 60, (err, reply) => {
   if (err) {
      console.error(err);
   } else {
      console.log(reply); // Output: 1 if the expiration was set, 0 if the key doesn't exist or couldn't be set to expire
   }
});

client.setex('myKey2', 60, 'value', (err, reply) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(reply); // Output: "OK"
});

//Checking Expire time 
client.ttl('mykey', (err, reply) => {
   if (err) {
      console.error(err);
   } else {
      console.log(reply); // Output: the number of seconds remaining until the key expires (-1 if the key exists but has no expiration, -2 if the key doesn't exist)
   }
});

//Getting the Key value
client.get('myKey',(err, reply) => {
   if (err) {
      console.error(err);
   } else {
      console.log(reply); // Output: "myValue"
   }
});

//Checking the Key if Exist
client.exists('mykey', (err, reply) => {
   if (err) {
      console.error(err);
   } else {
      console.log(reply); // Output: 1 if the key exists, 0 if the key does not exist
   }
});


//Peeking the Key
client.keys('*', (err, reply) => {
   if (err) {
      console.error(err);
   } else {
      console.log(reply); // Output: Array of keys
   }
});

//Deleting the Key
client.del('myKey', (err, reply) => {
   if (err) {
      console.error(err);
   } else {
      console.log(reply); // Output: "1"
   }
})

//Flushing the Key
client.flushAll((err, reply) => {
   if (err) {
      console.error(err);
   } else {
      console.log(reply); // Output: "OK"
   }
})

//List Left Pushing 
client.lpush('mylist', 'value1', 'value2', 'value3', (err, reply) => {
   if (err) {
      console.error(err);
   } else {
      console.log(reply); // Output: the length of the list after inserting the values
   }
});

//List Right Pushing
client.rpush('mylist', 'element1', (err, reply) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(reply); // Output: the new length of the list
});

//List Multiple Pushing 
client.rpush('mylist', 'element2', 'element3', (err, reply) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(reply); // Output: the new length of the list
});

// LPOP - Remove and retrieve leftmost element from the list
client.lpop('mylist', (err, element) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(element); // Output: Leftmost element from the list
});

// RPOP - Remove and retrieve rightmost element from the list
client.rpop('mylist', (err, element) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(element); // Output: Rightmost element from the list
});

// Printing the List 
client.lrange('mylist', 0, -1, (err, list) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(list); // Output: Array of list elements
});


//Adding Set in redis
client.sadd('mySet', 'member1', (err, reply) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(reply); // Output: the number of members added to the set
});

// Add multiple members to the set
client.sadd('mySet', 'member2', 'member3', (err, reply) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(reply); // Output: the number of members added to the set
});

//Printing Set Member in Redis
client.smembers('mySet', (err, members) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(members); // Output: Array of set members
});

// Remove a single member from the set
client.srem('mySet', 'member1', (err, reply) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(reply); // Output: the number of members removed from the set
});

// Remove multiple members from the set
client.srem('mySet', 'member2', 'member3', (err, reply) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(reply); // Output: the number of members removed from the set
});

//Hset in redis
client.hset('hashKey', 'field', 'value', async(err, reply) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(reply); // Output: 1 (indicating 1 field-value pair added or updated)
});

//Getting the length of hash
client.hLen('hashKey', async (err, reply) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(reply); // Output: 1 (indicating 1 field-value pair added or updated)
});

//HGet in Redis
client.hget('hashKey', 'field', (err, value) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(value); // Output: The value of field1
});

//Getting All the key 
client.hgetall('hashKey', (err, data) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(data); // Output: { field1: 'value1', field2: 'value2', field3: 'value3' }
});

//Deleting Key
client.hdel('hashKey', 'field', (err, reply) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(reply); // Output: The number of fields deleted
});

//Checking Exist 
client.hexists('hashKey', 'field', (err, reply) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(reply); // Output: 1 if the field exists, 0 if it doesn't
});