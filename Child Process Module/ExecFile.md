<h1 align=center>ExecFile Method In Child Process</h1>

## What is execfile method?
In Node.js, execFile() is a method of the child_process module that is used to execute a file with the specified arguments.

This method is similar to the exec() method, but instead of using the shell to execute a command, execFile() runs a file directly. This can be faster and more secure than using the shell to execute a command.

execFile() takes three arguments: the path to the file to execute, an array of arguments to pass to the file, and an optional callback function to handle the output of the file.

## File
- file /<string> The name or path of the executable file to run.
## Args
- args /<string[]> List of string arguments.
## Options 
<em>Type: Object</em>

***The same options as child_process.exec() are supported. Since a shell is not spawned, behaviors such as I/O redirection and file globbing (File globbing (also known as file name expansion) is a mechanism used by command-line interpreters (such as Bash, PowerShell, or Command Prompt) to expand a pattern representing a set of filenames into a list of matching filenames. *.txt ) are not supported.***

- cwd \<string> Current working directory of the child process.
- env \<Object> Environment key-value pairs.
- encoding \<string> Default: 'utf8'
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