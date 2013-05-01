//Först:
var sayHello = function(name) {
	alert("Hej, " + name + "!");
};

sayHello('Kalle');

//Sen:
var sayHello = function(f, name) {
	f("Hej, " + name + "!");
};

sayHello(alert, 'Kalle');