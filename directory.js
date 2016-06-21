var fs = require("fs");

if(fs.existsSync("library")) {
	console.log("Directory already there");
} else {
	fs.mkdir("library", function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("Directory Created");
		}
	});
}
