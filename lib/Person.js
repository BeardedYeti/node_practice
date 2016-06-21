var EventEmitter = require('events').EventEmitter;
//Utilities module has an inherits function, and it's a way that wee can add a object to the prototype of an existing object.
var util = require('util');
//Person Constructor
var Person = function(name) {
	this.name = name;
};

//Person inherits the EventEmitter
util.inherits(Person, EventEmitter);

module.exports = Person;