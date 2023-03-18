<h1 align=center>Child Process in Node.js</h1>

## What is child process in node.js?
In Node.js, a child process is a separate process that is spawned from the main Node.js process. This child process can execute code independently of the main process and can communicate with it through inter-process communication (IPC) mechanisms.

There are several ways to create child processes in Node.js, including using the built-in child_process module. This module provides a set of functions and classes that can be used to create child processes, including spawn(), exec(), and fork()

By default, pipes for stdin, stdout and stderr are established between parent process and node spawned process. It is possible to stream data through these pipes in a non-blocking way. 

Note, however, that some programs use line-buffered I/O internally. While that does not affect Node.js, it can mean that data sent to the child process may not be immediately consumed.

## Asynchronous and synchronous way
The child_process.spawn() method spawns the child process asynchronously, without blocking the Node.js event loop. The child_process.spawnSync() function provides equivalent functionality in a synchronous manner that blocks the event loop until the spawned process either exits or is terminated.

The child_process.spawn() method spawns the child process asynchronously, without blocking the Node.js event loop. The child_process.spawnSync() function provides equivalent functionality in a synchronous manner that blocks the event loop until the spawned process either exits or is terminated.

 Note that each of these alternatives are implemented on top of child_process.spawn() or child_process.spawnSync().

 - child_process.exec(): spawns a shell and runs a command within that shell, passing the stdout and stderr to a callback function when complete.
- child_process.execFile(): similar to child_process.exec() except that it spawns the command directly without first spawning a shell.
- child_process.fork(): spawns a new Node.js process and invokes a specified module with an IPC communication channel established that allows sending messages between parent and child.
- child_process.execSync(): a synchronous version of child_process.exec() that will block the Node.js event loop.
- child_process.execFileSync(): a synchronous version of child_process.execFile() that will block the Node.js event loop.

Each of the methods returns a ChildProcess instance. These objects implement the Node.js EventEmitter API, allowing the parent process to register listener functions that are called when certain events occur during the life cycle of the child process.

The child_process.exec() and child_process.execFile() methods additionally allow for an optional callback function to be specified that is invoked when the child process terminates.

## What is the difference between execfile and exec?
exec and execfile can be vary based on platfrom On unix type OS(linux and macOs) execfile runs smoothly because it doesn't uses shell but on window .cmd and .bat file are not executable on their own without a terminal, and therefore cannot be launched using child_process.execFile().

On window execFile() is unable to execute command. alternative to this will be

- .bat and .cmd files can be invoked using child_process.spawn() with the shell option set, 
```
const bat = spawn('"my script.cmd"', ['a', 'b'], { shell: true });
// or:
exec('"my script.cmd" a b', (err, stdout, stderr) => {
  // ...
});
```
- with child_process.exec
```
const exec = require('child_process').exec;
exec('my.bat', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
```

-  by spawning cmd.exe and passing the .bat or .cmd file as an argument (which is what the shell option and child_process.exec() do).
```
const spawn = require('child_process').spawn;
const bat = spawn('cmd.exe', ['/c', 'my.bat']);

bat.stdout.on('data', (data) => {
  console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.log(data.toString());
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});
```
In any case, if the script filename contains spaces it needs to be quoted.