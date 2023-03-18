const fs = require('fs');

// Writing the file
fs.writeFile('file.txt',"[this is content] ",(err)=>{
   if(!err){
      console.log("File  Created");
   }
})

// Appending the file
fs.appendFile('file.txt',"[this is appended content]",(err)=>{
   if(!err){
      console.log("File  Appended");
   }
})

// Remove the file 
fs.unlink('file.txt',(err)=>{
   if(!err){
      console.log('File Removed');
   }
})