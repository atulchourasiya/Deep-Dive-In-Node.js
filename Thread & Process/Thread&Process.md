<h1 align=center>Threads & Process</h1>

## What is thread and process
A process is a fundamental unit of execution in a stand alone application. you can't have a single thread of something. a process should be there which can spawn multiple thread

If a process has single thread then the process doing all the work and if the process has multiple thread which means process has running multiple task parallelly.

## Example 
Suppose, you have four core in your computer.  which mean your computer can run four task parallelly but modern computer runs 100s of task simultanously that's where scheduler came into picture. scheduler manages the thread running in process and give fair amount of time to each thread and by fair mean not equal. because some thread has high priority. the point here is mordern computer is capable of running thread more than its logical and physical core.

## What happen when we launch node.js application
As we launch our node.js application process create a single thread which is main thread and these thread consisting event loop. 