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
/*
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
*/
////////////////////-------------ES6 CLASSES--------------------////////////////////
//I can use whatever i like, expression or declaration
//class expression
/*
const PersonCl = class {}; //Classes are a special type of functions
//class Declaration
class PersonCl1 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calc() {
    //all the methods that we write here will be on the .prototype property of the class.Not on the object themselfs
    console.log(2023 - this.birthYear);
  }
}

const jessica = new PersonCl1('Jess', 1996);
console.log(jessica);

//we can also add a function manually to the prototype
PersonCl1.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

//1. Classes are not Hoisted. WE CANNOT USE THEM BEFORE THEY ARE DECLARED IN THE CODE
//2. Classes are first-class citizens(we can pass and return them from classes(classes are a special kind of functions BTS))
//3. Classes are executed in strict mode
*/
///////////////////-------------SETTERS AND GETTERS------------------///////////////////////
/*
const account = {
  //in objects
  owner: 'ant',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

class PersonCl2 {
  //In classes
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calc() {
    //all the methods that we write here will be on the .prototype property of the class.Not on the object themselfs
    console.log(2023 - this.birthYear);
  }

  get age() {
    return 2023 - this.birthYear;
  }
  //setting a property that already exists
  set fullName(fullName) {
    if (fullName.includes(' ')) {
      this._fullName = fullName; //we are creating a new variable. _fullName just an easy convention. Just a different name.
    } else {
      alert(`${fullName} is not a full name`);
    }
  }
  get fullName() {
    return this._fullName;
  }
}
const antonis = new PersonCl2('AntonisChouvardas', 1994);
antonis.fullName = 'Antonis Chouvardas';
console.log(antonis);
*/
//////////////////----------STATIC METHODS-------------/////////////////////
/*
// Array.from(document.querySelectorAll('h1)) from method is attached to the array contructor so we could not use the from method to an array
//from is attached to the constructor and not the prototype property of the constructor. So all the arrays do not inherit this method.
//from method is in the Arrays namespace

//when we added a method in the class, we did it using this Person.prototype.sayHi = fun...
*/
//------------------------------------------------to make the method static() in constructor functions--------------------------------------------------------------------------------
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
Person.hey = function () {
  //<------------------------ static method in constructor function
  console.log('Hey mate');
  console.log(this);
};
Person.hey();
//cant do this matilda.hey(). Because it is not on the object

//-------------------------------------------------to make the method static() in class--------------------------------------------------------------------------------
class PersonCl2 {
  //In classes
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //INSTANCE METHODS
  calc() {
    //all the methods that we write here will be on the .prototype property of the class.Not on the object themselfs
    console.log(2023 - this.birthYear);
  }

  get age() {
    return 2023 - this.birthYear;
  }
  //setting a property that already exists
  set fullName(fullName) {
    if (fullName.includes(' ')) {
      this._fullName = fullName; //we are creating a new variable. _fullName just an easy convention. Just a different name.
    } else {
      alert(`${fullName} is not a full name`);
    }
  }
  get fullName() {
    return this._fullName;
  }
  //STATIC METHODS
  static hey() {
    console.log('yo'); //<------------------------ static method in constructor function
    console.log(this);
  }
}
const antonis = new PersonCl2('AntonisChouvardas', 1994);
antonis.fullName = 'Antonis Chouvardas';
console.log(antonis);
PersonCl2.hey();
*/
/////////////////////------------------Object.create--------------///////////////////
/*
//we can use Object.create to manually set the prototype of an object to any other object that we want
//we can create an object that we want to be the prototype of all the person objects
//Prototype Chain Works just like in Constructor functions or Classes---WE DID NOT NEED ANY CONSTRUCTOR FUNCTIONS AND NO PROTOTYPE PROPERTY
const PersonProto = {
  calc() {
    //let this be the methdo that we want all person objects to inherit
    console.log(2023 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); //stevens prototype in PersonProto
console.log(steven);
steven.fullName = 'Steven';
steven.birthYear = 1994;

steven.calc();

const stella = Object.create(PersonProto);
stella.init('Stella', 1994);
console.log(stella);
*/
/////////////////-------------CODING CHALLENGE 2------------/////////////////
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  accelerate() {
    this.speed += 10;
  }
  decelerate() {
    this.speed -= 5;
  }
}

const car1 = new Car('Honda', 50);
const car2 = new Car('Ferrari', 120);
console.log(car1.speedUS, car2.speedUS);
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

console.log(car1.speedUS, car2.speedUS);
*/

////////////////////////------------------INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS----------------////////////////
/*
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never function declaration in class constructor
};
Person.prototype.calAge = function () {
  //by doing this and not adding the method in the class implementation we make sure that there
  //will not be a copy made with every object but this function will be able to be used from every class object
  console.log(2023 - this.birthYear); //this is set to the object that is calling the method
};
//every object has access to the methods and propeprties from its prototype
const Student = function (firstName, birthYear, course) {
  //pass the parents arguments first
  Person.call(this, firstName, birthYear); //we specify the this keyword. Because is a normal function call and in functions the this keyword shows to the parent
  this.course = course;
};
//LINKING PROTOTYPES
Student.prototype = Object.create(Person.prototype); //we first must set the prototype and then continue on adding more methods to the object
//we do this because Object.create returns an empty object. Also we do not want an exact same copy of the Person.prototype. We need to inherit from it
//An then we add methods
Student.prototype.constructor = Student; //we set the constructor
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

//if we do this (Student.prototype = Object.create(Person.prototype);) here, then object.create would overwrite the method we already added
const ant = new Student('Antonis', 1994, 'CS');
console.log(ant);
ant.introduce();
ant.calAge();
console.log(ant.__proto__);
console.log(ant.__proto__.__proto__);
console.log(ant instanceof Student);
console.log(ant instanceof Person);
console.log(ant instanceof Object); //so the chaining we did works


Constructor       _________\             function Prototype
 [Person]                  /              [Person.prototype]
                                                  |
Student.prototype=Object.create(Person.prototype) |   (Object.create defines prototypes manually)
                                                  |
Constructor       _________\              function Prototype
 [Student]                 /              [Student.prototype]
                                              __proto__:
                                            Person.prototype
                                                  |
              const ant = new Student('Antonis',     |
                                                  |
                                                Object
                                                [ant]
                                              __proto__:
                                            Student.prototype
*/

/////////////////-------------CODING CHALLENGE 3------------/////////////////
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}`);
};

Car.prototype.decelerate = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}`);
};

const CarE = function (make, speed, battery) {
  Car.call(this, make, speed);
  this.battery = battery;
};
CarE.prototype = Object.create(Car.prototype);
CarE.prototype.constructor = CarE;

CarE.prototype.chargeBattery = function (chargeTo) {
  this.battery = chargeTo;
};
CarE.prototype.accelerate = function () {
  //child overwrite the method of the parent class. Polymorphism. Every child can have the same method and use it differently
  this.speed += 20;
  this.battery -= 1;
};
CarE.prototype.inform = function () {
  console.log(
    `${this.make} going at ${this.speed} with charge of ${this.battery}%`
  );
};

const hnd = new Car('Honda', 120);
const tesla = new CarE('Tesla', 110, 55);

console.log('---------------------------------------------------------------');
console.log(CarE.prototype.constructor);
console.log(tesla.__proto__);
console.log(tesla.__proto__.__proto__);
console.log(tesla);
console.log(tesla instanceof Car);
console.log(tesla instanceof CarE);
console.log('---------------------------------------------------------------');

tesla.decelerate();
console.log(tesla);
tesla.chargeBattery(80);
console.log(tesla);
tesla.accelerate();
console.log(tesla);
*/
/*
hnd.accelerate;
hnd.decelerate;
console.log(hnd.speed, hnd.make);
console.log(tesla.speed, tesla.make);
*/

////////////////////////------------------INHERITANCE BETWEEN "CLASSES": ES6 CLASSES----------------////////////////

/*
class PersonCl2 {
  //In classes
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //INSTANCE METHODS
  calc() {
    //all the methods that we write here will be on the .prototype property of the class.Not on the object themselfs
    console.log(2023 - this.birthYear);
  }

  get age() {
    return 2023 - this.birthYear;
  }
  //setting a property that already exists
  set fullName(fullName) {
    if (fullName.includes(' ')) {
      this._fullName = fullName; //we are creating a new variable. _fullName just an easy convention. Just a different name.
    } else {
      alert(`${fullName} is not a full name`);
    }
  }
  get fullName() {
    return this._fullName;
  }
  //STATIC METHODS
  static hey() {
    console.log('yo'); //<------------------------ static method in constructor function
    console.log(this);
  }
}
const antonis = new PersonCl2('AntonisChouvardas', 1994);
antonis.fullName = 'Antonis Chouvardas';
//console.log(antonis);
//PersonCl2.hey();
class StudentCl2 extends PersonCl2 {
  //will ink to the prototype behind the scenes without me having to think about that
  constructor(fullName, birthYear, course) {
    //This always needs to happen first
    super(fullName, birthYear); //Call the constructor of the parent class. (Like Java). Its is responsible of creating the this keyword in the subclass
    this.course = course;
  }
  introduce() {
    console.log(`${this.fullName}`);
  }
  calc() {
    //overwrite calc method of the parent class
    //all the methods that we write here will be on the .prototype property of the class.Not on the object themselfs
    console.log(2023 - this.birthYear + 1);
  }
}

const stella = new StudentCl2('Stella Chatz', 1994, 'Nursing');
stella.introduce();
stella.calc();
console.log(stella);
*/

////////////////////////------------------INHERITANCE BETWEEN "CLASSES": Object.create()----------------////////////////

/*
const PersonProto = {
  calc() {
    //let this be the methdo that we want all person objects to inherit
    console.log(2023 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); //stevens prototype in PersonProto
steven.init('Steven Anderson', 1994);
steven.calc();
const StudentProto = Object.create(PersonProto);
const stella = Object.create(StudentProto); //StudentProto is the prototype of stella.And in turn the PersonProto is the prototype of StudentProto
//So PersoProto is a parent prototype of stella which means that its in its prototype chain.
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
stella.init('Stella Chatz', 1994, 'Nursing');
stella.calc();
console.log(stella);
console.log(steven);
//StudentProto.init = function(firstName, birthYear, course){

//}
*/
/////////////////////////-------------ENCAPSULATION: PROTECTED PROPERTIES AND METHODS-----------------/////////////////////////
//faking private
/*
class Account {
  constructor(owner, curr, pin) {
    this.owner = owner;
    this.curr = curr;
    this.pin = pin;
    //ITS IS NOT TRULY PRIVATE
    this._pin = pin;
    this._movements = [];//PROTECTED
    this.locale = navigator.language;
    console.log(this.owner, this.locale);
  }
  getMovs(){
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
}
const acc1 = new Account('Ant', 'EURO', 1111);
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(100);
console.log(acc1);
*/
/////////////////////////-------------ENCAPSULATION: PROTECTED PROPERTIES AND METHODS-----------------/////////////////////////
/*
class Account {
  //Public fields. These fields are going to be present to all instances. They are not on the prototype
  locale = navigator.language;

  //private fields
  #movements = [];
  #pin;
  constructor(owner, curr, pin) {
    this.owner = owner;
    this.curr = curr;
    //protected property
    this.pin = pin; //because we are setting the pijn whith the input value. We have to define it outside of the constructor
    //ITS IS NOT TRULY PRIVATE
    this.#pin = pin;
    //this._movements = []; //PROTECTED
    //this.locale = navigator.language;
    console.log(this.owner, this.locale);
  }
  getMovs() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this; //in order for the object to be return so that we can chain methods
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  //Private methods
  _approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('Ant', 'EURO', 1111);
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(100);
//console.log(acc1.#movements);//private property
acc1._approveLoan(100);

/////////////////////////-----------------CHAINING METHODS--------------------------///////////////////////////
acc1.deposit(300).deposit(400).withdraw(45);
*/
/////////////////-------------CODING CHALLENGE 4------------/////////////////
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}`);
    return this;
  }
  decelerate() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}`);
    return this;
  }
}
class CarE extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(this.speed, this.#charge);
    return this;
  }
  accelerate() {
    //child overwrite the method of the parent class. Polymorphism. Every child can have the same method and use it differently
    this.speed += 20;
    this.#charge -= 1;
    console.log(this.speed, this.#charge);
    return this;
  }
  getCharge() {
    return this.#charge;
  }
  setCharge(val) {
    this.#charge = val;
  }
}

const tesla = new CarE('Tesla', 110, 55);
tesla.accelerate();
tesla.accelerate();
tesla.decelerate();
tesla.chargeBattery(80);
console.log(
  '----------------------------------------------------------------------'
);
const tesla1 = new CarE('Tesla', 110, 55);
tesla1.accelerate().accelerate().decelerate().chargeBattery(80);
