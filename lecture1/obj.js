var Person = function(name) {
	this.name = name;
};
var kalle = new Person('Kalle');
console.log(kalle.name);
console.log(kalle['name']);


//Eller
var kalle = {
	name: 'Kalle'
};
console.log(obj.name);
console.log(obj['name']);