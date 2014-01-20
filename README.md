exec.it
-------

This is a quick example of using process.exec to execute a shell command.  It can be included as a module if you so desire, but it's more just a reminder how to do it.

## The Code

Here's how you do it yourself...

	require("child_process").exec(command,options,function(err,stdout,stderr){
		// do something here with stdout/stderr
	});

## Usage as module

If you would prefer you can use exec.it as a module, this:

	var execit = require("exec.it");
	execit("ls -la",function(err,stdout,stderr){
		console.log("stdout: "+stdout);
		console.log("stderr: "+stderr);
	});

## Why?

Because I had five minutes.