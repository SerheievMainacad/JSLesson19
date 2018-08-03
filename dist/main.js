'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Animal = function () {
	function Animal(name, sname) {
		_classCallCheck(this, Animal);

		this.name = name;
		this.sname = sname;
		this.age = 10000;
	}

	_createClass(Animal, [{
		key: 'hello',
		value: function hello() {
			alert(this.name);
		}
	}]);

	return Animal;
}();

var Dog = new Animal('Rex');

console.log(Dog);
Dog.hello();

var Bird = function (_Animal) {
	_inherits(Bird, _Animal);

	function Bird(name, sname) {
		_classCallCheck(this, Bird);

		return _possibleConstructorReturn(this, (Bird.__proto__ || Object.getPrototypeOf(Bird)).call(this, name));
	}

	_createClass(Bird, [{
		key: 'birdHello',
		value: function birdHello() {
			_get(Bird.prototype.__proto__ || Object.getPrototypeOf(Bird.prototype), 'hello', this).call(this);
		}
	}]);

	return Bird;
}(Animal);

var Swallow = new Bird('Swallow', 'sw');
console.log(Swallow);
Swallow.birdHello();