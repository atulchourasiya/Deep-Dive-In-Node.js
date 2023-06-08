<h1 align=center>RoundRobin In Node.js</h1>

## What is Round Robin?

Round Robin is a scheduling algorithm used in computer systems and networking to allocate resources fairly among multiple processes or tasks. It is a simple, pre-emptive algorithm that assigns a fixed time-slice, called a quantum or time quantum, to each process in a cyclic order.

In a Round Robin scheduling, processes are lined up in a queue, and the CPU gives each process a fixed amount of time to execute, which is usually a few milliseconds. When a process finishes its time quantum, it is put back at the end of the queue, and the CPU moves to the next process in the queue.

This process continues until all processes have completed their execution, or until the system terminates a process for any reason. Round Robin is a popular scheduling algorithm because it provides good performance for interactive systems where each process requires short bursts of CPU time.