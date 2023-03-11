<h1 align=center>Libuv In Node.js</h1>

## What is Libuv in Node.js
Node.js relies on various dependencies under the hood for providing various features.
- V8
- libuv
- llhttp
- c-ares
- OpenSSL

 Libuv is a cross-platform C library that provides an event-driven, asynchronous programming interface for network and file system operations. It was originally developed for the Node.js runtime, but can be used as a standalone library in other projects as well.it is basically a component just like v8 which is responsible for everything asynchronous in node.js 

One of the key features of libuv is its event loop. The event loop is a construct that allows for non-blocking I/O operations. When an I/O operation is initiated, libuv registers a callback function that will be called when the operation completes. While waiting for the I/O operation to complete, libuv can continue processing other events on the event loop. This allows for efficient use of system resources and enables high-performance, non-blocking I/O.

node does not only rely on libuv and v8 other than libuv node.js uses
- http parser for parsing http request
- Openssl for cryptography
- c-ares for DNS stuff
- zlib for compression

## What are the feature of Libuv?
- Full-featured event loop backed by epoll (Linux), kqueue (OSX), IOCP (Windows), event ports (SunOS).
- Asynchronous TCP (net module) and UDP (dgram module)
- Asynchronous DNS resolution (used partly for the dns module)
- Asynchronous file, file system operations & events (fs module)
- ANSI escape code controlled TTY
Thread pool and Signal handling
Child processes
- High-resolution clock
Threading and synchronization primitives.
- Inter-Process Communication using sockets and Unix domain sockets (Windows)

![libuv](https://media.geeksforgeeks.org/wp-content/uploads/20210218205830/screen17-660x325.jpg)

## Why Libuv uses core rather than thread?
Libuv uses a core-based model rather than a thread-based model because it provides better scalability and performance.

In a thread-based model, each thread has its own stack, registers, and other resources. This means that the operating system needs to allocate and manage resources for each thread, which can be expensive in terms of memory usage and context switching overhead.

Additionally, libuv uses non-blocking I/O operations to achieve concurrency, which allows the event loop to perform other tasks while waiting for I/O events to complete. This means that a single thread can handle multiple I/O operations concurrently, further improving performance.

 libuv's core-based approach has proven to be highly effective for event-driven programming and asynchronous I/O.

## What is thread pool?
A thread pool in Node.js is a collection of worker threads that can be used to perform asynchronous operations in parallel. When a Node.js application needs to perform an I/O operation, such as reading a file or making a network request, it can use a thread pool to execute the operation in a separate thread. This frees up the main event loop thread to handle other requests, making the application more responsive and efficient.

After Node 10.5 worker threads can also be used to execute JavaScript in parallel.

 By default, Libuv creates a thread pool with four worker threads, but this can be configured using the "UV_THREADPOOL_SIZE" environment variable.

The thread pool in Node.js is used by several built-in modules, including the "fs" module for file I/O, the "crypto" module for cryptographic operations, and the "dns" module for DNS resolution. When a Node.js application calls a function that performs an asynchronous operation, such as "fs.readFile()", Once the operation is complete, the result is passed back to the main event loop thread, which can then continue processing other requests.
## Is node.js always use thread pool for asynchronous request?
No, Node.js does not always use worker threads to implement asynchronous requests. Asynchronous requests can be implemented using different techniques, such as callbacks, Promises, and async/await, without necessarily involving worker threads.

Here's an example of an asynchronous HTTP request using the built-in http module in Node.js, without using worker threads:
```
const http = require('http');

http.get('http://example.com', (res) => {
  console.log(`Got response: ${res.statusCode}`);
  res.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
  });
  res.on('end', () => {
    console.log('Request finished.');
  });
}).on('error', (err) => {
  console.error(`Error: ${err}`);
});
}
```
In this example, http.get() makes an asynchronous HTTP request to the specified URL. The request is handled asynchronously using a callback function that is called when the response is received. The res object passed to the callback provides access to the response data, which can be processed asynchronously using event handlers.

No worker threads are used in this example, as the HTTP request is handled asynchronously using callbacks.

However, as I mentioned earlier, certain asynchronous operations in Node.js, such as file I/O and cryptographic operations, may use worker threads to avoid blocking the event loop. For example, the fs.readFile() method may use a worker thread to read a large file asynchronously, while the event loop continues running other tasks.
## Is asynchronus function is c++ binary in node.js?
The implementation of asynchronous functions in C++ binaries used by Node.js may vary depending on the specific library or framework being used. However, regardless of the implementation details, the basic concept of asynchronous programming remains the same: executing code without blocking the event loop by using callbacks or other asynchronous mechanisms.
## How the whole process works?

1. When a Node.js application is started, it initializes the event loop, which is a core component of the platform. The event loop is responsible for handling asynchronous I/O operations, such as network requests and file I/O.

2. When a request is made in Node.js, such as an HTTP request, it is processed by the event loop in an asynchronous manner. The request is added to a queue of pending I/O operations, and the event loop continues to process other requests.

3. When an I/O operation is completed, such as receiving a response to an HTTP request, the event loop retrieves the completed operation from the queue and executes the appropriate callback function to handle the response.

4. In some cases, such as when an I/O operation is known to be blocking and could potentially slow down the event loop, the operation may be executed in a separate thread from the thread pool. This allows the event loop to continue processing other requests while the blocking operation is performed in parallel.

5. When an I/O operation is identified as blocking, Node.js uses libuv, a platform abstraction layer, to delegate the operation to a worker thread from the thread pool. libuv maintains a pool of worker threads that can be used to perform blocking operations in parallel, without blocking the event loop.

6. Once the blocking operation is complete, the worker thread returns the result to libuv, which then passes it back to the event loop for processing.

7. The event loop then executes the appropriate callback function to handle the completed I/O operation, and the request is fulfilled.

In summary, the event loop in Node.js is responsible for processing asynchronous I/O operations, and it uses libuv to delegate blocking I/O operations to worker threads from the thread pool, to avoid blocking the event loop. The decision to use the thread pool is made by Node.js and libuv based on various factors, such as the size of the data being transmitted and the current load on the system.

## Summary
Libuv is a C library used by node.js on top of V8. It helps to process blocking request or a asynchronous function/c++ binary like cryptography, file system or DNS related task by putting it to another thread other than the main thread where the event loop is executing then these worker thread that may belongs to other core returns the result to main thread.

 The operating system assigns threads to available cores based on the current load on each core, the priority of the threads, and other factors. The goal is to optimize the use of available processing resources and improve performance. 
