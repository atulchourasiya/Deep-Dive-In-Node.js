const { exec } = require('child_process');

exec('dir', (err, stdout, stderr) => {
	if (err) {
		console.log(err);
		return;
	}
	else if (stderr) {
		console.log(stderr);
		return;
	}
	else{
		console.log(stdout);
	}
});
