var ChildProcess = require('child_process');
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

	ChildProcess.exec(command,options,callback);
};

module.exports = exec;
