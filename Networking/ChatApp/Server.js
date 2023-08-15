const net = require("net")

//Use to create server
const server = net.createServer()
//This method is used to create comnection between two endpoint whether it's a two TCP endpoint or two IPC endpoint
const client = server.on("connection", async (socket) => {
   console.log("A new connection to the server");
   socket.on("data", (data) => {
      console.log(data.toString("utf-8"))
   })
})

server.listen(3008, "127.0.0.1", () => {
   //this is not an event this is a method to get the information about server
   console.log("opened server on", server.address());
})