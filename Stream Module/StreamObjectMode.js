var http = require('http');
const fs = require('fs');

// Create a readable stream from a file in object mode
const readableStream = fs.createReadStream('example.json', { objectMode: true });

// Define an event listener for the 'data' event on the readable stream that logs the received object
readableStream.on('data', (chunk) => {
  console.log(`Received object: ${JSON.stringify(chunk)}`);
});

// Define an event listener for the 'end' event on the readable stream that logs the end of the stream
readableStream.on('end', () => {
  console.log('End of stream');
});

http
	.createServer(function (req, res) {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.write('Hello World!');
		res.end();
	})
	.listen(8080);
