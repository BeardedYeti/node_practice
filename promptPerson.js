var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};


rl.question("What is the name of a real person? ", function(answer) {

	realPerson.name = answer;
//Creates a Write Stream and creates a md file with the name of the person prompt
//Writes the header of the md as well
	fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n==================\n\n`);

	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

	rl.on('line', function(saying) {

		realPerson.sayings.push(saying.trim());

		fs.appendFile(realPerson.name + ".md", `* ${saying.trim()} \n`);

		if (saying.toLowerCase().trim() === 'exit') {
			rl.close();
		} else {
			//Writes the saying of the file
			//When exit is entered in cmd it will close stream
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		    rl.prompt();
		}

	});

});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();
	
});



