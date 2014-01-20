exec.it
-------

This is a quick example of using process.exec.  It can be included as a module if you so desire, but it's more just a reminder how to do it.

## Usage as module

	var execit = require("exec.it");
	execit("ls -la",function(err,stdout,stderr){
		console.log("stdout: "+stdout);
		console.log("stderr: "+stderr);
	});



