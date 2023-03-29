'use strict';
/*
-Objects are building blocks of applications and interact with one another
-Interactions happen through a public interface(API): methods that the code
outide of the object can access and use to communicate with the object

ABSTRACTION : Ignoring or hiding details that dont matter, allowing us to get an overview perspective of the thing we re implementing, instead of
messing about with details that dont really matter to our implementation
ENCAPSULATION : Keeping properties and methods private inside the class, so they are not accessible 
from outside the class. Some methods can be exposed as a public interface
INHERITANCE : Making all properties and moethods of a certain class available to a child class, forming a hieratchical relationship between classes. This allows
us to reuse common logic and to model real-world relationships
POLYMORPHISM : A child class can overwrite a method it inherited from a parent class 

**Public interface: All the moethods that are not private


///////////////----------------OOP IN JS---------------------///////////////////
PROTOTYPE(contains methods) <- OBJECT(can access methods)  vs CLass -> OBJECT
Objects are linked to a prototype
-Prototypal inheritance(delegation) : The prototype contains methods(behavior)  that are accessible to all objects linked to thta prototype("an instance inheriting from a class")
-Objects delegate behavior(methods) to the linked prototype object. 

Array.prototype.map() -> Array.prototype is the prototype of all array objects we create in JS. So all arrays have access to the map methodγιαννης κοντογιαννης

HOW DO WE IMPLEMENT OOP IN JS
1.CONSTRUCTOR FUNCTION
--Techinique to create objects from a function
--This is how built-in objects like Arrays, Maps or Sets are actually implemented
2.ES6 CLASSES
--Modern alternative to constructor function syntax;
--"Syntactic sugar": behind the scenes, ES^ clsses work exactly like constructor functions
--ES6 classes do not behave like classes in "classical OOP"
3.Object.create()
--The easiest and most straightforward way of linking an object to a prototype object
*/
//////////////////////-----------CONSTRUCTOR FUNCTIONS--------------//////////////////////////////
/*
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never function declaration in class constructor
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);
//1. new {} is created
//2. function is called, this = {}
//3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);
const jay = 'Jay';
console.log(jonas instanceof Person);
console.log(jay instanceof Person);
*/

/////////////////////-------------PROTOTYPES--------------///////////////////
/*
each and every function in JavaScript automatically has a property called 'prototype' and that includes conctructor functions.
Every property that is created from a constructor function will get access to ALL methods and properties that we define on the constructors 
prototype property 

*/
/*
console.log(Person.prototype);
Person.prototype.calAge = function () {
  //by doing this and not adding the method in the class implementation we make sure that there
  //will not be a copy made with every object but this function will be able to be used from every class object
  console.log(2023 - this.birthYear); //this is set to the object that is calling the method
};
//every object has access to the methods and propeprties from its prototype
jonas.calAge();

console.log(jonas.__proto__); //not the prototype property but the prototype
//SO THE PROTOTYPE OF THE JONAS OBJECT IS THE PROTOTYPE PROPERTY OF THE CONSTRUCTOR FUNCTION
console.log(jonas.__proto__ === Person.prototype); //Person.prototype is not the prototype of Person. IT IS WAS Is GOING TO BE USED AS THE PROTOTYPE OF ALL THE OBJECTS THAT ARE CREATED WITH
//THE PERSON CONSTRUCTOR FUNCTION
console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

//WE CAN ALSO SET PROTOTYPES ON THE PROTOTYPE
Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda); //the propertie is not in the object. The objects properties are only the ones that are declared directly on the object itself not including the inhereted properties
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('species')); //false

//the prototype of Person.prototype is Object.prototype
//Prototype Chain- Series of links between objects linked through prototypes(similar to scope chain).
//In general JS moves up the chain in order to find methods and properties, until the Object.prototype
//So objecy Jonas inherits all Object.prototype methods and properties

console.log(jonas.__proto__); //Person.prototype
console.log(jonas.__proto__.__proto__); //Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); //null because Object.prototype is the top of the chain

console.log(Person.prototype.constructor);
//A look a functions prototype. Every function is an object so therefor it has a prototype
const arr = [3, 6, 5, 4, 6, 9, 3];
console.log(arr.__proto__); //each array inherits these methods cause of the Array.prototype
console.log(arr.__proto__) === Array;
Array.prototype.unique = function () {//we can add methods to Array.prototype and every array with inherit that method
  return [...new Set(this)];
};
console.log(arr.unique());//NOT A GENERALLY GOOD IDEA TO EXTEND A BUILD-IN PROTOTYPE
*/
/////////////////-------------CODING CHALLENGE------------/////////////////

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
};
Car.prototype.decelerate = function () {
  this.speed -= 5;
};
const car1 = new Car('Honda', 50);
const car2 = new Car('Ferrari', 120);

car1.accelerate();
car2.accelerate();
console.log(car1.make, car1.speed);
console.log(car2.make, car2.speed);
car1.accelerate();
car2.accelerate();
console.log(car1.make, car1.speed);
console.log(car2.make, car2.speed);
car1.decelerate();
car2.decelerate();
console.log(car1.make, car1.speed);
console.log(car2.make, car2.speed);
