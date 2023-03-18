const execFile = require('child_process').execFile;

const child = execFile('node', ['--version'], (err, stdout, stderr) => {
	if (err) {
		console.log(err);
		return;
	} else if (stderr) {
		console.log(stderr);
		return;
	} else {
		console.log(stdout);
	}
});