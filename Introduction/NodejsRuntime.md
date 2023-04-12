<h1 align=center>Node.js Runtime</h1>

## What is Node.js Runtime

We developer write code in js. But to run our code with need to compile it in machine language and for that we have to write a software, luckily we don't have to do this manually, because we have a guy called interpreter. 

Chrome uses v8 as an interpreter but he is not the main hero. In firefox spider-monkey is used as an interpreter and just like that Iot device uses quickjs, react-native uses hermes as a interpreter, safari uses javaScriptCore, microsoft uses chakra.

Well to keep it simple v8 or any other interpreter is just a software to convert high level language into machine code which is then executed by processor. this model is independent from browser based execution or node base execution.

However thing are not that simple in real world.  In browser we can use various function such as document.getElementByID() which are not the part of v8. so we can fairly think that browser sort of injecting some command in javascript runtime. so thing like this can be customize. for e.g in native javascript we have java api and in node.js we have fs module etc.

In the journey from js source code to machine code there are some milestone to look after. v8 + libuv are two of them. just like these guy connect js to processor. node.js connect webpage to libuv + v8 which is the underlying technology which convert source code into machine language.

Node act as a bridge between which fill the gap of certain api across your js code. by this mean v8 software which is written mostly in c++ which is responsible for the execution of low level programming however if you want to run http server,you need to get the socket out of v8, you need to open the port, you need to listen to the traffic & close the server. manually if node.js is not there. (This can be done in js or in C++)

## Summary 
Js is a high level language which do not have access or can't able to do memory management or any low level task therefore node.js came to rescue which provides various library like file system or operating system or crpyto library that helps us to run js out of the browser, extend the functionality and bridge the gap between js & v8.