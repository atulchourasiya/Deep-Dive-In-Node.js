<h1 align=center>Exec Method In Child Process</h1>

## What is Exec Method
In Node.js, exec() is a method that allows you to execute a shell command in a child process.

When you call exec(), it spawns a new shell process and runs the specified command in that shell. The method returns a ChildProcess object, which provides methods to control the child process.

Unlike spawn(), which streams the output of the child process to the parent process in real-time, exec() buffers the output of the child process in memory and passes it to a callback function once the child process has exited.

exec() is useful for running short, simple shell commands and retrieving their output. However, because exec() buffers the entire output of the child process, it can be memory-intensive for commands that generate a large amount of output.

In summary, exec() is a method in Node.js that allows you to execute a shell command in a child process and retrieve its output.

Note: Never pass unsanitised user input to this function. Any input containing shell metacharacters may be used to trigger arbitrary command execution.
## Command 
- command \<string> The command to run, with space-separated arguments.
## Options 
<em>Type: Object</em>

- cwd \<string> Current working directory of the child process.
- env \<Object> Environment key-value pairs.
- encoding \<string> Default: 'utf8'
- shell \<string> Shell to execute the command with. Default: '/bin/sh' on UNIX, 'cmd.exe' on Windows. The shell should understand the -c switch on UNIX or /s /c on Windows. On Windows, command line parsing should be compatible with cmd.exe.
- timeout \<number> Default: 0
- maxBuffer \<number> Largest amount of data (in bytes) allowed on stdout or stderr - if exceeded child process is killed. Default: 200 * 1024.
- killSignal \<string> | \<integer> Default: 'SIGTERM'
- uid \<number> Sets the user identity of the process (see setuid(2)).
- gid \<number> Sets the group identity of the process (see setgid(2)).

## Callback
If a callback function is provided, it is called with the arguments (error, stdout, stderr). On success, error will be null. On error, error will be an instance of Error. The error.code property will be the exit code of the child process while error.signal will be set to the signal that terminated the process. Any exit code other than 0 is considered to be an error.

The stdout and stderr arguments passed to the callback will contain the stdout and stderr output of the child process. By default, Node.js will decode the output as UTF-8 and pass strings to the callback. The encoding option can be used to specify the character encoding used to decode the stdout and stderr output. If encoding is 'buffer', or an unrecognized character encoding, Buffer objects will be passed to the callback instead.

- callback \<Function> Called with the output when process terminates.
- error \<Error>
- stdout \<string> | \<Buffer>
- stderr \<string> | \<Buffer>

## Returns
- Returns: \<ChildProcess>