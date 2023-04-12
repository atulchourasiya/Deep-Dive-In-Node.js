<h1 align=center>Internal Working of FS Module</h1>

## Why Node.js Uses C++

JS is not the fastest language to do most of the task. yeah it is true that Js can handle network request very well but not the internal working. C++ can do these thing in a much better way.

## Working of FS Module  

FS module has various function one of them is readfilesync. As we execute readfilesync first it checks the basic parameter and then internally calls fs.readsync and then it calls binding.read (binding comes from process.binding) which is the bridge between node.js world and javascript world. binding.readsync function is written in C++.

## Where is the v8

Well v8 is just a software written mostly in C++. In the C++ implemention of function we can see object which uses v8 internally. node.js make use of v8 to understand what is being told from the js world to the node.js world. even  in the translation of js to node.js of the C++ you obviously need v8 to kickin and helps node to understand what really happen.

## Summary
v8 helps node.js to understand js code or to make sense of actual js code
