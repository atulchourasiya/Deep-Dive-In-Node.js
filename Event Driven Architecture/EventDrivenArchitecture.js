const http = require('http')

const server = http.createServer();

server.on('request',(request,response)=>{
   let {query , pathname : path} = url.parse(request.url,true)
})