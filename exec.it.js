var Process = require('child_process');
var Util = require("util");

var isFunction = function(f) {
	return f && typeof(f)==='function';
};

var exec = function(command,options,callback) {
	if (!command && callback) callback("Missing Command.");
	if (isFunction(options)) {
		callback = options;
		options = {};
	}
	options = options || {};

	Process.exec(command,options,callback);
};

module.exports = exec;

// exec("dir",function(error,stdout,stderr){
// 	console.log(stdout);
// 	console.log(stderr);
// });