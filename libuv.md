<h1 align=center>Libuv In Node.js</h1>

## What is Libuv in Node.js
Node.js relies on various dependencies under the hood for providing various features.
- V8
- libuv
- llhttp
- c-ares
- OpenSSL

 Libuv is a multi-platform C library that provides an event-driven, asynchronous programming interface for network and file system operations. It was originally developed for the Node.js runtime, but can be used as a standalone library in other projects as well.it is basically a component just like v8 which is responsible for everything asynchronous in node.js 

One of the key features of libuv is its event loop. The event loop is a construct that allows for non-blocking I/O operations. When an I/O operation is initiated, libuv registers a callback function that will be called when the operation completes. While waiting for the I/O operation to complete, libuv can continue processing other events on the event loop. This allows for efficient use of system resources and enables high-performance, non-blocking I/O.

## Why Libuv uses core rather than thread?
Libuv uses a core-based model rather than a thread-based model because it provides better scalability and performance.

In a thread-based model, each thread has its own stack, registers, and other resources. This means that the operating system needs to allocate and manage resources for each thread, which can be expensive in terms of memory usage and context switching overhead.

Additionally, libuv uses non-blocking I/O operations to achieve concurrency, which allows the event loop to perform other tasks while waiting for I/O events to complete. This means that a single thread can handle multiple I/O operations concurrently, further improving performance.

 libuv's core-based approach has proven to be highly effective for event-driven programming and asynchronous I/O.

## What is thread pool?
A thread pool in Node.js is a collection of worker threads that can be used to perform asynchronous operations in parallel. When a Node.js application needs to perform an I/O operation, such as reading a file or making a network request, it can use a thread pool to execute the operation in a separate thread. This frees up the main event loop thread to handle other requests, making the application more responsive and efficient.

 By default, Libuv creates a thread pool with four worker threads, but this can be configured using the "UV_THREADPOOL_SIZE" environment variable.

The thread pool in Node.js is used by several built-in modules, including the "fs" module for file I/O, the "crypto" module for cryptographic operations, and the "dns" module for DNS resolution. When a Node.js application calls a function that performs an asynchronous operation, such as "fs.readFile()", Once the operation is complete, the result is passed back to the main event loop thread, which can then continue processing other requests.
