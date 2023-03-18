const http = require('http');
const os = require('os');
const cluster = require('cluster');
//provide all information
// console.log(cluster.worker)
const cpuNums  = os.cpus().length;

//isPrimary require node version above 16.0
if (cluster.isPrimary) {
	console.log(`Primary ${process.pid} is running`);

	// Fork workers.
	for (let i = 0; i < cpuNums; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	});
} else {
	// Workers can share any TCP connection
	// In this case it is an HTTP server
	http
		.createServer((req, res) => {
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.write('Server is up and running on port 8080');
			res.end();
		})
		.listen(8000);

	console.log(`Worker ${process.pid} started`);
}