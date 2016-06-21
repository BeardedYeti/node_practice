var EventEmitter = require('events').EventEmitter;
//Utilities module has an inherits function, and it's a way that wee can add a object to the prototype of an existing object.
var util = require('util');
//Person Constructor
var Person = function(name) {
	this.name = name;
};

//Person inherits the EventEmitter
util.inherits(Person, EventEmitter);
//New Object name Ben Franklin
var ben = new Person("Ben Franklin");
//Listens for when the object emits 'speak' and then passes 'said' to the function
ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});
//ben the object emits speak and passes what he said
ben.emit('speak', "You may delay, but time will not.");



