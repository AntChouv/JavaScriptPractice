'use strict';

//JACASCRIPT AND HOW IT WORKS BEHIND THE SCENES
/*
--------Javascript is a HIGH-LEVEL, PROTOTYPE-BASED OBJECT-ORIENTED, MULTI-PARADIGM, INTERPRETED OF JUST IN-TIME COMPILED, DYNAMIC
--------SINGLE-THREADED, GARBAGE-COLLECTED, programming language with FIRST-CLASS FUNCTIONS and a NON-BLOCKING,EVEN LOOP CONCURRENCY MODEL

////////HIGH LEVEL////////
Anything on the computer need hardware resources. With javascript and python for example we dont need to ask permission about this resources.
Unline for example with C that we have to manually manage this resources. But thats with programms in C with always be faster.


////////GARBAGE CALLECTOR///////
We dont have to do memory management. Its a mechanism inside JS that removes old unused variables etc.


////////INTERPRETED OR JUST-IN-TIME COMPILED//////////


////////MULTI-PARADIGM/////////
Paradigm : An approach and mindset of structuring code, which will direct your coding style and technique.(imperative,decrarative)
--Procedural
----Organizing the code in a linear way with functions in between

--OOP
---JS is a prototype-based object-oriented language. Everything is an object except primitives. 

Functional programming

//////FIRST-CLASS FUNCTIONS/////////
Functions are treated as regular variables. We can pass them into other functions and return them from functions

///////DYNAMIC//////////
Dynamically typed. We dont assign data types to variables. They become known when JS engine executes the code
The type of the variable can change.(TypeScript you declare types)

///////SINGLE THREADED - NON BLOCKING EVENT LOOP////////
Concurency model : low the javascript engine handles multiple tasks happening at the same time.
JavaScript runs in one single thread. So if we want to fetch large data it would block the single-thread. 
We want non-blocking behavior. 

For that we use event loop. It takes long runnig tasks, executes them in the background, and puts them
back in the main thread once they are finished.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

V8 engine powers google and node.js(serverside applications using Javascript)

JS engine: Has a call stack and a heap
-CALL STACK: Is where the code is executed using execution context
-HEAP: Is a memory pool that stores all the objects our application needs

(Compilation/Interpretation)

-Compilation - the entire source code is converted into machine code at once, written in binary file that can be executed by the pc.

-Interpretation - Interpreter runs through the source code and executes it line by line.

Javascript used to be an interpreted language. But interpreted languages are much slower tha compiled. It was not a problem. Now it is.
So modern JS is using JUST-IN-TIME(JIT) compilation: Entire code converted into machine code at once, then executed immediately.
There is no portable file(machine code). The execution happens immediately

STEPS:

STEP#1:PARSING OF THE CODE
-------The code is parsed into a data structued called Abstract Systax Tree(AST). Also does the syntactical analysis to find syntax errors.

STEP#2:COMPILATION
-------Takes the AST and compiled it to machine code

STEP#3:EXECUTION(Happens in the CALL STACK)
-------The machine code is executed right away

OPTIMIZATION STRATEGY
-------It firstly creates a very non-optimized version of the machine code to start execution. And as long as it runs, the machine code is 
-------optimized in the background. Thats what makes modern engines such as V8 so fast.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

JS RUNTIME IN THE BROWSER

---JS RUNTIME is a big box which includes everything we need to run JS in the browser. The heart is the engine(HEAP, CALL STACK).
---We also need access to the APIs(DOM, Timers, Fetch API, ...). API are functionalities provided to the engine but are not part
of the JS language. JS get acces to this API through the global window object.
---CALL BACK QUEUE: A data structure that contains all the call back functions that are ready top be executed.

EXAMPLE : We attach CALL BACK FUNCTIONS to DOM elements(like button) to react to certain events. These event handler functions
are  also called CALL BACK FUNCTIONS. As the event happens(a click) the CALL BACK FUNCTION will be called. So the first thing happens
after the event is that the CALL BACK FUNCTIONS is put to the CALL BACK QUEUE. The when the CALL STACK  is empty the CALL BACK FUNCTION
is passed to the CALL STACK so that it can be executed. This happens with the event loop. The EVENT LOOP takes CALL BACK FUNCTIONS from
the CALL BACK QUEUE and puts them in the CALL STACK so that they can be executed.
The EVENT LOOP is how the JS concurency model is implemented. 

JS can exist outside of browsers, for example node.js.
In node.js we dont have the API as the browser provides these. So we have C++ dindings and thread pool.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

HOW IS JS CODE EXECUTED

Lets say the code just finished compiling.
Next, creating of global execution context(top level code(not inside functions))
(Execution context : Environment in which piece of JS is executed. Stores all the necessery information for some code to be executed)

Next executed. The pc cpu is procesing the machine code received.

Next functions start getting executed.And waiting for call backs(now we get an Execution context per function(F.E. call back function accosiated with click event))
The event loop provides these call back functions to the call back stack.

INSIDE AN EXECUTION CONTEXT(CREATION PHASE, RIGHT BEFORE EXECUTION):
1)Variable environmbet:
-----let, const, var decrarations
-----functions
-----arguments objects

Each functions gets its own execution context as soon as the function is called. So all variables declared inside a functions, we ned up in its variable environment. However
a function can access variables outside of the function(scope chain). 

2)Scope chains consists of references to variables that exist outside of the current function.It is stores
in each execution context.

3)THIS keyword: 

///ARROW FUNCTIONS DONT HAVE ARGUMENTS OBJECT AND THIS KEYWORD. THEY CAN USE THE ARGUMENTS OBJECT AND THE THIS KEY WORD FROM ITS CLOSEST REGULAR FUNCTION PARENT <----- SOS


///CALL STACK IS WHERE EXECUTION CONTEXT GET STACKED ON TOP OF EACH OTHER, TO KEEP TRACK OF WHERE WE ARE IN THE EXECUTION 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

SCOPE
SCOPING: How outr program's variables are organized and accessed.
Where do they live. Where can i access it

Scoping is controlled by placement of functions and block in the code. A function thats inside another function has access to the parent finction variables

SCOPE: Space or environment in ewhich a certain variable is declared. There a global scope, function scope and block scope.

SCOPE OF A VARIABLE : REGION OF OUR CODE WHERE A CERTAIN VARIABLE CAN BE ACCESSED

-------GLOBAL SCOPE: Top level code. Variables that are declared outside of a function and can be accessed everywhere.
-------FUNCTION SCOPE: Variables are accessible only inside fucntion. NOT outside. LOCAL SCOPE. Live in the function
-------BLOCK SCOPE(ES6): Variables accessible only inside block. ONLY TO LET AND CONST.if{block scope}. VAR is accessible out of Block also(ES4-ES5). It is Function Scoped

///////////////////////////////////////////////////////EXMPL://////////////////////////////////////////////////////////////

const myName = 'Jonas'; //Global Scope(myName, function first)
function first() {
  //function scope(const age,var millenial, function second(), second())
  const age = 30;
  if (age >= 30) {
    //block scope(decade)
    const decade = 3;
    var millenial = true;
  }

  function second() {
    //function scope(scope job)
    const job = 'teacher';
    console.log(`${myName} is a ${age}-old ${job}`);//myName is global, age parent function scope, job own scope
  }
  second();
}
SCOPE LOOKUP: Looks at parent scopes for variables. Does not work the other way around

SCOPE CHAIN VS CALL STACK

CALL STACK:
---------------------------------------------------------------
third()(d)
second()(c)
first()(b,second)
global(a,first,third)


SCOPE CHAIN:
---------------------------------------------------------------
                       global scope(a,first,third)
                           /                  \
                          /                    \
                         /                      \
first(b,second | a,first,third)              third(d | a,first,third)
              |         
              |
              |
second(c | b,second | a,first,third)


const a = 'Jonas';
first();
function first() {
    //function scope(const age,var millenial, function second(), second())
    const b = 'hello';
    second();
  
    function second() {
      //function scope(scope job)
      const c = 'Hi';
      third();
    }
    second();
  }
  function third(){
    const d = 'Hey';
    console.log(d+c+b+a);//error becaus c and b cannot be found in the scope of third()
  }
}


function calcAge(birthYear) {
  const age = 2023 - birthYear;
  console.log(firstName); //Accessible cause it global
  function printAge() {
    const output = `${firstName} you are ${age}, bonr in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; //function scoped
      const str = `oh and you are a millenial ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str) not in scope
    console.log(millenial); //millenial is var so it is accesible on the parent scope as well
    //add(2, 3);//not in scope
  }
  printAge();
  return age;
}
const firstName = 'Ant'; //The reason the orde we put this does not matter is because it is executed
//on runtime. But in the execution context it is known
calcAge(1994);
//If we declace inside of a block, a variable with the same declaration statement as in a parent scope
//the new variable is a completely different variable inside its scope. But if we reassign a value on an already existing 
//variable of a parent scope, then this variable get manipulated and keeps the new value.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

HOISTING and the TDZ:
(EXECUTION CONTEXT : Variable environment, Scope Chain, This keyword)

HOISTING: Makes some types of variables accessible/usable in the code they are actually declared. "Variables lifted to the top of their scope"

Behind the scenes the code is scanned for variable declarations before it is executed. 

---Function Decleration: Hoisted , Initila Value: Actual Function , SCOPE: BLOCKED
---var variables : Hoisted , Initial Value: undefined , Scope : Function
---let and const variables : Technically not Hoisted, <uninitialized,TDZ(Temporal Dead Zone) , SCOPE: Block
-------we cant access the variable between the beginning of the scope and where the variable is decrared(We can access but it is not initialized)
---fucntion expressions and arrows: depends if using var or let/const

TEMPORAL DEAD ZONE: 

if (myName === 'Ant'){
    console.log(`Ant is a ${job}`);//
    const age = 2023 - 1994;       // ---> TDZ
    console.log(age);              //
    const job = 'teacher
}




console.log(me); //Undefined
console.log(job); //error.is in TDZ
console.log(1994); //error.is in TDZ

var me = 'Ant'; //
let job = 'programmer';
const year = 1994;

console.log(addDecl(2, 3)); //We call function declaration before it was defined
console.log(addExpr1(2, 3));
console.log(addArrow1(2, 3));
function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  //erros.is in TDZ. it is a function variable so it acts like a variable
  return a + b;
};

const addArrow = (a, b) => a + b; //erros.is in TDZ. it is a function variable so it acts like a variable

var addExpr1 = function (a, b) {
  //erros. It is not a function. It is undefined.
  return a + b;
};

var addArrow1 = (a, b) => a + b; //erros. It is not a function. It is undefined

//Only function decleration work when we want to access function before defining it.


if (!numProducts) deleteShopping();//This is dangerous. Undefined is a falsy value like 0. So having declared the variable as var
                                   //it is know to the others as undefined. So !numProducts with return true so the products we be deleted

var numProducts = 10;//This is dangerous. Undefined is a falsy value like 0. So 

function deleteShopping(){
    console.log('All products deleted');
}

////////////////////THIS//////////////////////
IS CREATED FOR EVERY EXECUTION CONTECT
IT POINT TO THE OWNER OF THE FUNCTION
THIS is NOT stativ. It depends on how the function is called and its value is only assigned when the dunction is catually called.

Method this = <Object that is calling the method
simple function call this = undefined
arrow function this = <this of surrounding function(lexical this)>
event listener this = <DOM element that the handler is attached to>

console.log(this); //Window object

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); //Undefine
};
calcAge(1994);
const calcAge1 = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); //this of the surrounding function(window object)point to the Global scope
};
calcAge1(1994);

const jonas = {
  year: 1994,
  calcAge3: function () {
    console.log(this); //point to the object-owner of the method
    console.log(2023 - this.year);
  },
};
jonas.calcAge3();

const matilda = {
  year: 2017,
};
matilda.calcAge3 = jonas.calcAge3; //we copy the moethod calcAge3 from jonas to matilda

matilda.calcAge3();

const f = jonas.calcAge3;
//f();this keyword in method is undefined. Because now its just a function with no owner.


//var firstName = 'Matilda'//created a firstName property on the window object
//so the line greet: () => console.log(`hey ${this.firstName}`) would not show error and that this.firstName is undefined because this points to the window object
const jonas = {
  //This is not a block. It is an object literal. It does not create its own scope
  firstName: 'Jonas',
  year: 1990,
  calcAge3: function () {
    console.log(this); //point to the object-owner of the method
    console.log(2037 - this.year);

    //const isMillenial = function () {
    //  console.log(this);//Undefoned because its in a function
    //  console.log(this.year >= 1981 && this.year <= 1996);
    //};
    //const self = this; //here we put the this of the parent scope(self or that).But there is a modern solution useing arrow function
    //const isMillenial = function () {
    // console.log(self); //here i use the this keyword of the parent which is preserved above
    // console.log(self.year >= 1981 && self.year <= 1996);
    //};
    const isMillenial = () => {
      console.log(this); //By default the arrow function does not have a this keyword so the this in here points to the parent
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  //greet: () => console.log(`hey ${this.firstName}`), //undefined cause arrow functions dont have this keyword.
  //they use this of the surrounding function. Parent of greet is Global Scope
};
jonas.calcAge3();
//jonas.greet();
//NEVER USE ARROW FUNCTIONS AS AN OBJECT METHOD....AVOID VAR

////////////////////////////////ARGUMENTS KEYWORD///////////////////////////////////////////////////
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 7); //Yes we can do that
//var addArros = (a, b) => {
//  console.log(arguments);
//  return a + b; //The arrow function does not have this keyword
//};
//addArros(2, 5);

////////////////////PRIMITIVES VS OBJECTS(PRIMITIVE VS. REFERENCE TYPES)///////////////////////////
Primitives: Number, String, Boolean, Undefined, Null, Symbol, BigInt. Are stored in the call stack
Objects: Everything else. Object literal, Arrays, Functions, Many more... Get stored in the memory heap

let age = 30; // in memory : Identifier(age) Address(0001) Value(30) <--- Primitive so CALL STACK
//Identifier points to the address. Not the value.
let oldAge = age; //Points to the same memory address as the age variable

age = 31;
console.log(age); //new space in memory : Identifier(age) Address(0002) Value(31)
console.log(oldAge); //shows in the cell it showed the age at first

const me = {
  //It is stored in the HEAP. But there is a memory space in the CALL STACK with me shows to
  //The value of that cell points to the address of the object in the heap.
  //Identifier(me) Address(0003) Value(D30F) --shows-->Address(D30F) Value{name:'Jonas, Age: 30};REFERENCE TYPE
  name: 'Jonas',
  age: 30,
};
const friend = me; //Points to me object in the HEAP which points to the me object in the HEAP
friend.age = 27; //Even if const, we can manipulate because we dont change the value in the CALL STACK
//we change the value in the HEAP. Thats why primitives const cannot change but objects can.
console.log('Friend:', friend);
console.log('Me', me);

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 26,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//marriedJessica = {};//error we cant change the object completely. We can change attributes
//Copying objects(no address)
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 26,
  family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //Copys the object and its attributes..ONLY WORKS IN THE FIRST LEVEL
//Shallow copy of a object has the object atribute only. But a deep copy, copies the par
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
jessicaCopy.family.push('mary');
jessicaCopy.family.push('george'); //Trying to manipulate an object(array), within an object
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
*/
