const http = require('http')
const PORT = 8080;
const hostname = '192.168.43.250'
http.createServer(function(req,res){
   res.writeHead(200)
   res.write('this is data')
   res.end();
}).listen(PORT,hostname)