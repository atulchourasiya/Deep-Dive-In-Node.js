<h1 align=center>Stream In Node.js</h1>

## What is stream in node.js
In Node.js, a stream is an abstract interface for working with streaming data. A stream is essentially a sequence of data that can be read or written continuously over time, instead of all at once.

Streams are used to handle large amounts of data efficiently and effectively, without consuming a lot of memory. They are particularly useful when dealing with data that is too large to fit into memory all at once, such as a large file, or when dealing with data that is received or sent over a network in chunks.

Streams can be readable, writable, or both. All streams are instances of EventEmitter.

Node.js provides a built-in module called 'stream' that provides the functionality to work with streams. Streams can be used with a variety of different data sources and destinations, including files, network sockets, and HTTP requests and responses.

## Types of stream in node.js
- Writable: streams to which data can be written (for example, fs.- - createWriteStream()).
- Readable: streams from which data can be read (for example, fs.createReadStream()).
- Duplex: streams that are both Readable and Writable (for example, net.Socket).
- Transform: Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).

## What is object mode in stream
In Node.js streams, objectMode is an option that allows streams to work with JavaScript objects instead of just strings or Buffers. When objectMode is set to true, the stream will expect and emit objects instead of strings or Buffers.

By default, Node.js streams operate in binary mode, meaning they expect and emit Buffer objects. When objectMode is set to true, the stream operates in object mode, and the data passed through the stream is expected to be a JavaScript object.

