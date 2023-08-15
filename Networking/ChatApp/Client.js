const net = require("net")
const readline = require('node:readline/promises');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})
//Use to create client 
// This method use to create TCP or IPC client  
const socket = net.createConnection({host :'127.0.0.1', port : 3008},async ()=>{
   console.log("connected to server")
   const que = await rl.question("where do you i put all my condoms?")
   socket.write(que);
})
socket.on("close",()=>{
    console.log("Closed")
})

socket.on("end",()=>{
   console.log("Connection was ended!");
})