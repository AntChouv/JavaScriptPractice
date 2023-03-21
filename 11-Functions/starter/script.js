'use strict';
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //default values in the (). They can also contain expressions. price = 199 * 1.2;..Can also use the parameters
  //set before it : price = 199 * numPassengers
  //ES5 default values
  //numPassengers = numPassengers || 1;//default value
  //price = price || 199;//default value

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
//createBooking('LH123');

createBooking('LH123', 2, 800); //default values
createBooking('LH123', undefined, 800); //if we want to skip values

const flight = 'LH234';
const ant = {
  name: 'Ant Chouv',
  passport: 2486860940,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //Not a good practice
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2486860940) {
    alert('check in');
  } else {
    alert('Wrong');
  }
};
//checkIn(flight, ant);
console.log(flight); //It has not changed to LH999. It is a primitive type. We pass a copy to the function. It is not the same value. Thats why it will not change
console.log(ant); //The attribute name of the object chenged

//when we do this...
//const flightNum = flight;//flightNum just a copy. PRIMITIVE type
//const passenger = ant;
//We pass a reference to that object, in the memory heap. Not the object it self. So passenger points to the same place in memory as ant.
//So when we manipulate the passenger object in the function, we manipulate ant, because ant and passenger is the same object in the memory heap

//IN SUMMARY. Passing a primitive type to a function, is the same as creating a copy outside of the function. So the value is simply copied
//But with object is like we are creating a copy, but whatever happens to the copy happens to the object it self. The reason is because they
//point to the same address in the memory
//SOS : this can have consequences in databases

const newPass = function (person) {
  //we have two functions manipulating the same object.
  person.passport = Math.trunc(Math.random() * 100000000000);
  console.log(person.passport);
};
newPass(ant);

//SOS : JS DOES NOT HAVE PASSING BY REFERENCE......ONLY PASSING BY VALUE
//FIRST-CLASS FUNCTIONS : 
//functions are values, are just another type of object
//can store functions in variables or properties
//can pass functions as arguments to other functions
//can return functions from functions
//call methods on functions
//HIGHER-ORDER FUNCTIONS : 
//A function that receives another function as an input. The function that is received is a call back function.(It will be called later by the high order function)


//functions as argument. Call back functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWords = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
const transformer = function (str, fn) {
  //Abstraction. This function does not know how the string is manipulated
  console.log(`Transormed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); //functions have methodsfn.name
};
transformer('JavaScript is the best!', upperFirstWords); //we pass the function name. But the function is called inside the other functions(tranformer <- higher order fucntion)
transformer('JavaScript is the best!', oneWord); //call back functions. because they are called from another function later

const high5 = function () {
  console.log('yo');
};
document.body.addEventListener('click', high5);
['ant', 'jorf', 'mik'].forEach(high5); //call back function

//functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
//These below work because of closure(SOS)
//const greeterKey = greet('Hey'); //the greeterHey is essentially the return function
//greeterKey('Manol');
greet('Yo')('Ant');

//Test Using arrow functions
const greet2 = greeting => {
  return name1 => {
    console.log(`${greeting} ${name1}`);
  };
};
//the above in one line
const greet3 = greeting => name1 => console.log(`${greeting} ${name1}`);
greet2('Hey')('Friend');
greet3('Hey')('Friend');

const lufthanse = {
  airline: 'Lufthansa',
  code: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, name });
  },
};
lufthanse.book(235, 'Ant chouv');
const eurowings = {
  airline: 'Eurowings',
  code: 'EW',
  bookings: [],
};
//console.log(lufthanse);
const book = lufthanse.book; //taking the function from the lufthanse object and we store it in order to reuse it

//book(23, 'Manols Gianns');//book now is just a function. this in simple functions points to undefined
//CALL METHOD
book.call(lufthanse, 23, 'Manols Gianns'); //with "call" we pass instructions to the functions on where the "this" keyword will point
//console.log(lufthanse);

book.call(eurowings, 27, 'Mitsos mitsou');
//console.log(eurowings);

//APPLY METHOD
const passData = [35, 'Gianns Gianns'];
book.apply(lufthanse, passData);
//console.log(lufthanse);

book.call(eurowings, ...passData);
//console.log(eurowings);

//SOSOSOSOSOS BIND METHOD
//allows to manually set the this keyword. Bind does not call the function. It returns a new function where the this keyword is bound

const bookEW = book.bind(eurowings); //new function with the "this" keyword set to eurowings
//the above will not call the book function. Instead it will call a new function where the "this" keyword will always be set to eurowings
const bookLH = book.bind(lufthanse);
bookEW(456, 'Stamats Malons');
bookLH(888, 'Malons Stamats');
//console.log(eurowings);
//console.log(lufthanse);
//We can also do this
const bookEW23 = book.bind(eurowings, 23); //Now this flight is set
//only the name is missing
bookEW23('Ant Chouvard');
bookEW23('Stella Chatz');

//Bind is really usefull when we use objects together with eventListeners
//My try of putting eventHandler on the button and binding the function to the object
lufthanse.planes = 300;
lufthanse.byPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
console.log(lufthanse);
const byPla = lufthanse.byPlane.bind(lufthanse);
document.querySelector('.buy').addEventListener('click', byPla);
//byPla();
///PARCIAL APPLICATION :PRESETTING PARAMETERS
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); //standard to use null when there is no this
console.log(addVAT(100));
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
///////////MY TRY///////////////////
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};
function displayResults(type) {
  type === '';
}
poll.registerNewAnswer = function (type) {
  const answer = prompt(`${this.question}
  ${this.options[0]}
  ${this.options[1]}
  ${this.options[2]}
  ${this.options[3]}
  (Write option number)`);
  this.answers[answer] += 1;
  displayResults(this.answers);
  console.log(type);
};

const ask = poll.registerNewAnswer.bind(poll, 'array');

document.querySelector('.poll').addEventListener('click', ask);

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
//poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
//poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
//Sometimes we need a function to be invoked only once(async await)

//IIFE Imidiately Invoked Function Expression
(function () {
  console.log('Only once');
  const isPrivate = 25; //this is private. With the IIFE we can protect a variable of being overriden
})(); //whith () we call it

(() => console.log('This only once'))();

//We can protect variables by doing this also
{
  const isPrivate = 23; // this will not be accessible outside of this block
  var notPrivate = 46; //this is accesible
}
//The above is the reason why IIFE are not used that much anymore

////////////////////////////////SOS. One of the hardest JS features to understand//////////////////////////////

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount}`);
  };
};
const booker = secureBooking(); //this put in booker the return function
booker();
booker(); //
booker();
//A function has access to the variable environment (VE) of the execution in which it was created
//Closure: VE attavhed to the function, exactly as it was at the time and place the function was created
//the booker function has access to the passengerCount because it is basically defined in the scope in which
//the booker function was actually created. So the scope chain is actually preserved through the closure, even when a scope
//has been destroyed
//This is special because the booker function is a sence has access to the parent scope. So the passengerCount
//stays with the function forever. It will be always to use it forever
//JavaScript engine has CLOSURE in higher priority than the scope chain
//for example if we had a global passengerCount variable, It would still use the one in the closeure.

//A closure is the closed-over variable environment of the execution context in which a fucntion was created
//even after that execution context is gone
//A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The
//function keeps a reference to tis outer scope, shich preserves the scope chain throughout time.
//A closure makes sure that a function doesnt loose connection to variables that exister at the functions birth place
//A closure is like a backpack that a fucntion cariies around wherever it goes. This backpack has all the variables that were present in the environment
//whre the function was created

//  WE DO NOT HAVE TO MANUALLY CREATE CLOSURES, THIS IS A JS FEATURE THAT HAPPENTS AUTOMATICALLY.
//WE CAN NOT EVEN ACCESS CLOSED OVER VARIABLES EXPLICITLY. ACLOSURE IN NOT A TANGIBLE JS OBJECT.

//WE CAN TAKE A LOOK A THE INTERNAL PROPERTY.THE "BACKPACK"

console.dir(booker); //we can check the scopes [[...]]<internal property that we cannot access from our code

/////////////////////////CLOSURE EXAMPLES////////////////////////////////////
//TO LEARN AND IDENTIFY THEM

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
h();
f();

f();

const boardPassebg = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we boarding all ${n}`);
    console.log(`there are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`will start ${wait}`);
};

boardPassebg(90, 4);

/////////////////////////CODING CHALLENGE//////////////////////////////

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

*/
