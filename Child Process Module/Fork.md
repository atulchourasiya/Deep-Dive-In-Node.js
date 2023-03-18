<h1 align=center>Fork Method In Child Process</h1>

## What is fork method?

The child_process.fork() method is a special case of child_process.spawn() used specifically to spawn new Node.js processes. Like child_process.spawn(), a ChildProcess object is returned. The returned ChildProcess will have an additional communication channel built-in that allows messages to be passed back and forth between the parent and child.

It is important to keep in mind that spawned Node.js child processes are independent of the parent with exception of the IPC communication channel that is established between the two. Each process has its own memory, with their own V8 instances. Because of the additional resource allocations required, spawning a large number of child Node.js processes is not recommended.

By default, child_process.fork() will spawn new Node.js instances using the process.execPath of the parent process. The execPath property in the options object allows for an alternative execution path to be used.

Node.js processes launched with a custom execPath will communicate with the parent process using the file descriptor (fd) identified using the environment variable NODE_CHANNEL_FD on the child process. The input and output on this fd is expected to be line delimited JSON objects.

Note: The shell option available in child_process.spawn() is not supported by child_process.fork() and will be ignored if set.

