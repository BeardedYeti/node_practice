//Execute command is nice tool that allows us to execute external processes found in our env

var exec = require("child_process").exec;

exec("git version", function(err, stdout) {
	if(err) {
		throw err;
	}
	console.log("Git version executed");
	console.log(stdout);
});