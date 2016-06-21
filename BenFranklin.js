
//Requires Person.js
var Person = require("./lib/Person");

//Creating new Person objects
var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

//Listens for when the object emits 'speak' and then passes 'said' to the function
ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});

george.on('speak', function(said) {

	console.log(`${this.name} -> ${said}`);

});

//ben the object emits speak and passes what he said
ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone, thsn to be in bad company.");


