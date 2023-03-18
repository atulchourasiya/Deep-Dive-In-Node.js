<h1 align=center>Cluster In Node.js</h1>

## What is Cluster Module in Node.js
The cluster module is a built-in module in Node.js that allows a single Node.js process to create multiple child processes to share the workload. When process isolation is not needed, use the worker_threads module for scaling Node.js applications across multiple CPU cores to improve performance and reliability.

The cluster module provides an easy way to create child processes, manage communication between them, and distribute incoming requests among them. Each child process runs on a separate CPU core.

The master process listens for incoming connections and distributes them among the worker processes using a round-robin scheduling algorithm. Each worker process runs independently and can handle requests simultaneously.

Because workers are all separate processes, they can be killed or re-spawned depending on a program's needs, without affecting other workers. As long as there are some workers still alive, the server will continue to accept connections. If no workers are alive, existing connections will be dropped and new connections will be refused

## What is difference between libuv and cluster thread?
Both libuv and the cluster module provide worker thread functionality in Node.js, but they differ in their approach and purpose.

 Libuv provides a low-level, platform-independent API for asynchronous I/O operations and concurrency in Node.js. The worker thread functionality in libuv allows you to run CPU-bound or blocking code in a separate thread to avoid blocking the event loop and improve the responsiveness of your application. The libuv worker thread is designed to be a lightweight and flexible solution that can be used for a variety of tasks, such as CPU-intensive computations, file I/O operations, and network operations.

On the other hand, the cluster module is a higher-level module that provides a built-in way to scale Node.js applications across multiple CPU cores using child processes. The cluster module worker thread is designed to be used specifically for handling incoming requests in a multi-core environment. The cluster module worker thread listens for incoming requests and delegates them to child processes, which run independently and handle requests simultaneously.

In Summary libuv has a single event loop that share resources and cluster module runs separate processes  of node.js, every process has its own resources

## What are the cases where behaviour of cluster module differ from normal process?
The behavior of the cluster module in Node.js differs from a normal process in the following three cases:

- Listening on a port: ***When a Node.js application uses the cluster module, only the master process listens on a port. The child processes do not listen on any ports.*** Instead, they receive incoming connections from the master process through IPC (inter-process communication). This means that the child processes cannot listen on their own ports or accept connections directly.

- Sharing server handles: In a cluster environment, the master process creates a server object and shares its handle with the child processes. This allows the child processes to accept connections on the same port and handle as the master process. This is done using the server.listen({handle: shareHandle}) method in the child process.

- Using process.env.NODE_UNIQUE_ID: When a Node.js application is run with the cluster module, the child processes are assigned unique IDs starting from 1. These IDs are stored in the process.env.NODE_UNIQUE_ID environment variable. This can be useful for debugging or logging purposes to differentiate between requests handled by different child processes.

## Class Worker
A worker object contain all the information about worker and its method . it is obtained using cluster.worker

## Event Disconnect
Similar to the cluster.on('disconnect') event, but specific to this worker.
```
cluster.fork().on('disconnect', () => {
  // Worker has disconnected
});
```
