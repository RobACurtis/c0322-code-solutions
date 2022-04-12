function ExampleConstructor() {}
console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof prototype:', typeof ExampleConstructor.prototype);

var example = new ExampleConstructor();
console.log('example', example);
var instance = example instanceof ExampleConstructor;
console.log('instanceof:', instance);
