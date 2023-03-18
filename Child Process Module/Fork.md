<h1 align=center>Fork Method In Child Process</h1>

## What is fork method?
The child_process.fork() method is a special case of child_process.spawn() used specifically to spawn new Node.js processes. Like child_process.spawn(), a ChildProcess object is returned. The returned ChildProcess will have an additional communication channel built-in that allows messages to be passed back and forth between the parent and child.

It is important to keep in mind that spawned Node.js child processes are independent of the parent with exception of the IPC communication channel that is established between the two. Each process has its own memory, with their own V8 instances. Because of the additional resource allocations required, spawning a large number of child Node.js processes is not recommended.

By default, child_process.fork() will spawn new Node.js instances using the process.execPath of the parent process. The execPath property in the options object allows for an alternative execution path to be used.

Node.js processes launched with a custom execPath will communicate with the parent process using the file descriptor (fd) identified using the environment variable NODE_CHANNEL_FD on the child process. The input and output on this fd is expected to be line delimited JSON objects.

Note: The shell option available in child_process.spawn() is not supported by child_process.fork() and will be ignored if set.
## ModulePath 
- modulePath \<string> The module to run in the child.
## Args
- args \<string[]> List of string arguments.
## Options 
<em>Type: Object</em>
- cwd \<string> Current working directory of the child process.
- env \<Object> Environment key-value pairs.
- execPath \<string> Executable used to create the child process.
- execArgv \<Array> List of string arguments passed to the executable. Default: process.execArgv
- silent \<boolean> If true, stdin, stdout, and stderr of the child will be piped to the parent, otherwise they will be inherited from the parent, see the 'pipe' and 'inherit' options for child_process.spawn()'s stdio for more details. Default: false
- stdio \<Array> Supports the array version of child_process.spawn()'s stdio option. When this option is provided, it overrides silent. The array must contain exactly one item with value 'ipc' or an error will be thrown. For instance [0, 1, 2, 'ipc'].
- uid \<number> Sets the user identity of the process (see setuid(2)).
- gid \<number> Sets the group identity of the process (see setgid(2)).

## Returns
- Returns: \<ChildProcess>