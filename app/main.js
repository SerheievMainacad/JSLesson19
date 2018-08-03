// rest, spread
/*
//spread ...
const arr1 = [1, 2, 3];
const arr2 = [4, 3, 2];


const arr3 = [...arr1, 2, 3, 4, 5, ...arr1, ...arr2];
console.log(arr3);
const obj1 = {
	key1: 'value1',
	key2: 'value2'
};
const obj2 = {
	key3: 'value3',
	key4: 'value4'
};
const obj3 = {
	...obj1,
	...obj2
};
console.log(obj3);
//Object.assign
const newObj = Object.assign({}, obj1, obj2, { name: 'someName' });
console.log(newObj);
console.log(obj1);

//rest ...
// ...args - in the end
function f(a, b, ...args) {
	console.log(arguments);
	console.log(args);
}
function f2(...args) {
	console.log(args);
}
const arr = [2, 4, 44, 2111, 23, 54, 233, 555, 43, 3332, 2];
//Math.max.apply(null, arr);

const MaxVal = Math.max(...arr);
console.log(MaxVal);
f(1, 2, 4, 3, 2, 3, 4, 3);
f2(1, 2, 34, 4, 22, 2);*/

//function (default parametrs)

/*function foo(a = 2, b = 6) {
	//var a = a || 2
	// var b = b || 3
	// if(!arguments[0]){ arguments[0] = 2};
	return a + b;
}

console.log(foo());
console.log(foo(undefined, 1));
console.log(foo(2, 2));*/

//arrow function
/*
const foo = () => 1; // function(){return 1}
console.log(foo());

const foo2 = (a, b) => a + b; // function(){return a+b}
console.log(foo2(2, 3));

const foo3 = (a, b) => {
	const c = a + b;
	return c * a * b;
};
console.log(foo3(2, 3));

setTimeout(() => {
	console.log('arrowFunction');
}, 200);

const arr = [1, 2, 4, 3, 5, 4, 5];

console.log(arr.map((elem, i, arr) => elem * 3));
*/
/*
function foo(a, b) {
	console.log(arguments);
	return function() {
		console.log(arguments);
	};
}

const result = foo(2, 3);
result();

function foo2(a, b) {
	console.log(arguments);
	return () => {
		console.log(arguments);
	};
}

const result2 = foo2(2, 3);
result2();
*/

// objects
/*const name = 'asdadfas';
const obj = {
	name,
	hello: function(){
		alert('hello')
	}
	hello() {
		alert('hello');
	}
};

console.log(obj);
obj.hello();
*/

//destructurisation (objects)
/*
const obj = {
	name: 'ecmas',
	sname: 'script',
	age: 6,
	smth: true,
	price: 1000
};

const { name, age, sname, smth } = obj; // const name = obj.name; const age = obj.age;
console.log(name);
console.log(age);
console.log(sname);
console.log(smth);

function foo(asd) {
	const { name, price } = asd;
	console.log(`name is   ${name}`);
	console.log(`name is   ${price}`);
}

foo(obj);

*/
//destructurisation (objects)
/*
const arr = [1, 2, 3, 5, 4, 5];

const [one, two, , , , six] = arr;

console.log(one);
console.log(two);
console.log(six);
*/

/*let a = 2;

{
	let a = 3;
}

const foo = () => 1;

const obj = {
	name: 'name'
};

const obj2 = {
	...obj
};
*/

class Animal {
	constructor(name, sname) {
		this.name = name;
		this.sname = sname;
		this.age = 10000;
	}
	hello() {
		alert(this.name);
	}
}

const Dog = new Animal('Rex');

console.log(Dog);
Dog.hello();

class Bird extends Animal {
	constructor(name, sname) {
		super(name);
	}
	birdHello() {
		super.hello();
	}
}

const Swallow = new Bird('Swallow', 'sw');
console.log(Swallow);
Swallow.birdHello();
