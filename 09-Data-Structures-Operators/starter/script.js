'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'web', 'thu', 'fri', 'sta', 'sun'];

// Data needed for first part of the section
//Array destructuring: upacking values from an array or an object into seperate variables
const openingHours = {
  //object literal
  //Object
  [weekdays[3]]: {
    //we can now compute the property names
    //object
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  //object literal
  nameR: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //openingHours: openingHours,//Before ES6
  //ES6 enhanced object literals
  openingHours,
  //order: function (starterIndex, mainIndex) {//Old way of writing methods
  //  return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  order(starterIndex, mainIndex) {
    //New way of writing methods
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // {} inside the parenthesis because we do destructuring of the object received
  //We can do the destructuring of the object passed right away
  orderDelivery: function ({
    starterIndex = 1, //Default values
    mainIndex = 0, //Default values. It takes them only when the arguments are not there
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will de delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1} , ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    //main is mandatory, ...otherIngredients puts the other ingredients in array
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//const ingredients = [prompt('ing1'), prompt('ing2'), prompt('ing3')];
//restaurant.orderPasta(...ingredients); //passing array are individual variables using spread operator

restaurant.orderDelivery({
  //we pass and object in a function that takes object as parameter
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); //We pass one object. We dont pass 4 values. We pass the object with these values

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const flights1 =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
//Array destructuring: upacking values from an array or an object into seperate variables
const restaurant1 = {
  nameR: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 15,
      close: 22,
    },
    fri: {
      open: 15,
      close: 23,
    },
    sat: {
      open: 15, // Open 24 hours
      close: 24,
    },
  },
};


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //The above with destructuring(ES6 feature)
console.log(x, y, z);

console.log(arr); //We dont destroy the arr. We just destructuring it


const [first, second] = restaurant.categories; //Object destructuring
console.log(first, second); //We get Italian Pizzeria
//We want the first and the third
const [first1, , third] = restaurant.categories;
console.log(first1, third);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//SWITCHING
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

[main, secondary] = [second, main]; //Using destructuring
console.log(main, secondary);

const [starter, main] = restaurant.order(2, 0); //we destructure it
console.log(`starter : ${starter}
main : ${main}`);

const nested = [2, 4, [5, 6]]; //nested destructuring
const [a, , b] = nested;
console.log(a, b);
const [i, , [j, k]] = [2, 4, [5, 6]];
console.log(i, j, k);
//const [p, q, r] = [8, 9];
//console.log(p, q, r);8 9 undefined

const [p = 1, q = 1, r = 1] = [8, 9]; //setting default values. Useful with API
console.log(p, q, r); // 8 9 1

//OBJECT DESTRUCTURING
let { nameR, openingHours, categories } = restaurant; //order here does not matter
console.log(nameR, openingHours, categories); //the same names as property
//If we want different names
const {
  nameR: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//Default values
let { menu = [], starterMenu: starters = [] } = restaurant; //giving default values. menu does not exist so it will create []. starter exists
//so we will get the starter menu.
console.log(menu, starters);
//useful in the real world because we dont get hard coded data. We get the data from somewhere else. So we maybe dont know how it looks like
//SOS to set default values like above

//Mutating variables
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({ a, b } = obj);
({ nameR, openingHours, categories } = restaurant1); //We change values of we need the () to change values
console.log(nameR, openingHours, categories);
console.log(restaurant);
console.log(restaurant1);

//Nested Objects
const {
  fri: { open: o, close: c }, //destructuring object in an object and giving new names
} = openingHours;

console.log(o, c);


///////////////////////////////THE SPREAD OPERATOR////////////////////////////////////

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //not good
//these do the same thing
const newArr = [1, 2, ...arr]; //Spread the array into values
console.log(newArr);
console.log(...newArr); //individual elements

const newMenu = [...restaurant.mainMenu, 'Gnocci']; //new array from scatch.we dont mess with the objects values
console.log(newMenu);

//the difference with destructuring is that is wont store them in variables.

//COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu]; //similar to Object.assign. Creates a shallow cory

//MERGE TWO ARRAYS
const mergedMenus = [...restaurant.mainMenu, ...restaurant1.mainMenu];
console.log(mergedMenus);

//Iterables are arrays, strings, maps, sets, NOT objects. The spread operator ... works in all iterables
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];//... usaully works when we pass arguments or building an new array
console.log(letters);
console.log(...str);
//BUILDING template literal
//console.log(`${...str} Schmedtmann`);//wont work because we dont expect values separated by coma.

//Now the ... also works on OBJECTS. Even the yare not iterables
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Cristiano' };
console.log(newRestaurant);
//So as we did shallow copy of the array before, we can do that with the object as well. Instead of using Object.assign
const restaurantCopy = { ...restaurant }; //Shallow copy. Does not show in the same memory space as restaurant
restaurantCopy.nameR = 'Ristorante Roma';
console.log(restaurantCopy.nameR);
console.log(restaurant.nameR);

////////////////////////////////////REST PATTERN AND PARAMETERS////////////////////////////////
Same syntax as spread operator but it does the opposite. Takes individual values and puts them in an array.
//ARRAYS
const arr = [1, 2, ...[3, 4]]; //Spread Operator because RIGHT side
const [a, b, ...others] = [1, 2, 3, 4, 5]; //REST becaue LEFT. We are destructuring an array but using the REST we put the values 3,4,5 in others[]
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  //The REST has to be at the end to the arguments
  //skips middle element , , and puts all the other in otherfood
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; //merging two arrays with spread on right
//destructuring this merged array in individual variables
console.log(pizza, risotto, otherFood);

//OBJECTS

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays, sat);

const add = function (...nums) {
  //that way it can accept an array using this add(...x) and individual values by this add(5, 4, 7, 6);
  //REST arguments. Compreses the valus into string
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 4, 7, 6);
add(5, 4, 6, 7, 5, 4, 3, 2);

const x = [23, 5, 7];
add(...x); //Spread array in individual values. Then the REST argument of add compreses them into an array
restaurant.orderPizza('mushroom', 'sauce', 'chicken');
////////////////////////////////////////////////////&& || SHORT CIRCUITING //////////////////////////////////////////
//logical operators can use any data type they can return an data type, and they do short circuit evaluation

//|| OR OPERATOR
console.log('-------OR-----');
console.log(3 || 'Jonas'); //if the first value in Truthy it will return it. without looking the second
console.log('' || 'Jonas'); //jonas
console.log(true || 0); //true
console.log(undefined || null); //null because second
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
console.log(restaurant);
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10; //same as above.Instead of tenary expression
//if restaurant.numGuests = 0, because its a falsy value it wont take 0. But will take 23. We dont want that
console.log(guests2);

//&& AND OPERATOR
console.log('-------AND-----'); //Works in the opposite way as the OR operator
console.log(0 && 'Antons'); //The AND operator short circuits when the first value is Falsy. And returns it without checking the sceond value
console.log(7 && 'Antonis'); //If the first truthy, returns the second one

console.log('Hello' && 23 && null && 6 && undefined); //null. its the first Falsy found

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
//These two same
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //returns first falsy value or the last one if all of them are truthy

//////////////////NULLISH COALESCING OPERATOR///////////////////////
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10; //returns 10...we dont want that. We want 0
console.log(guests3);

const guestCor = restaurant.numGuests ?? 10; //Nullish values : null, undefined. So 0 is truthy.The way to short circuit this
console.log(guestCor);

//////////////////////////////LOGICAL ASSIGNMENT OPERATORS/////////////////////////////////////
const rest1 = {
  name: 'Capri',
  //numGuest: 20,
  numGuest: 0,
};
const rest2 = {
  name: 'Capr2',
  owner: 'Cristiano',
};
//OR operator assigns a value to a variable if that variable is currently falsy

//Lets say we got this pbjects from an API and we want all of them to have a certain attribute. And so add the property to the objects that dont have it
rest1.numGuest = rest1.numGuest || 10; //it has it so its 20
rest1.numGuest ||= 10; //Same as above
rest2.numGuest = rest2.numGuest || 10; //it doesnt have it so 10
rest2.numGuest ||= 10;
console.log(rest1);
console.log(rest2);

//?? operator

//We set numGuest : 0;
//rest1.numGuest ||= 10; //now this will return 10 and not 0. this happens because || returns the first truthy value. 0 is falsy
//Can correct using ??.
//rest2.numGuest ||= 10;
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;
console.log(rest1);
console.log(rest2);

//AND operator short circuits when the first value is falsy and returns this value. So assign a value to a variable if it is currently truthy

//rest1.owner = rest1.owner && '<ANONYMOUS>'; //rest1.owner is undefined so its falsy. It is returned
//rest2.owner = rest2.owner && '<ANONYMOUS>'; //rest2.owner. rest2 has an owner so its truthy. So it returns anonymous
//console.log(rest1);
//console.log(rest2);

//better than <rest1.owner = rest1.owner && '<ANONYMOUS>';> because it does not return undefined
rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';
console.log(rest1);
console.log(rest2);


///////////////////////////CODING CHALLENGE #1/////////////////////////////////
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...scorers) {
    //REST
    //compreses individual variables to array
    for (let i = 0; i < scorers.length; i++) {
      console.log(scorers[i]);
    }
    console.log(scorers.length);
  },
};
//1
const [players1, players2] = game.players; //Dectructuring players array in two smaller arrays
console.log(players1, players2);
//2
let [gk, ...fieldPlayers] = players1; //REST ...fieldPlayers
console.log(gk, fieldPlayers);
game.team1 = [game.team1, gk, fieldPlayers];
console.log(game.team1);

[gk, ...fieldPlayers] = players2; //REST ...fieldPlayers
console.log(gk, fieldPlayers);
game.team2 = [game.team2, gk, fieldPlayers];
console.log(game.team2);
//3
const allPlayers = [...players1, ...players2]; //MERGER the two arrays with dectructuring of the two arrays
console.log(allPlayers);
//4
game.players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(game);
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
game.players1Final ||= ['Thiago2']; //wont add cause game.players1Final is truthy
//6
game.printGoals('Ronal', 'Messi', 'Lewad', 'salah');
game.printGoals(...game.scored);

game.team1[0];

//7
team1 < team2 && console.log('team 1');
team2 < team1 && console.log('team 2');

//////////////////////////////////////////////////////////////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item); //item variable is the current element in each iteration.Can continue and break

for (const item of menu.entries()) {
  //console.log(item); //[0, 'Focaccia][1,'Bruschetta']....
  console.log(`${item[0] + 1}: ${item[1]}`);
  //Destructure the item is better
  const [num, itName] = [...item];
  console.log(num + 1, itName);
}
console.log(menu.entries()); //Array Iterator
console.log([...menu.entries()]); //array of arrays[0, 'Focaccia]


////////////////////////////OPTIONAL CHAINING(?.)///////////////////////////////////
//we might not know if a property exists(API);
//console.log(restaurant.openingHours.mon); //It will return undefined

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); //will not return undefined

//With oprional chaining
console.log(restaurant.openingHours.man?.open); //will return undefined

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
//with optional chaining
console.log(restaurant.openingHours?.mon?.open); //if opening hour dont exist will not read mon

const days = ['mon', 'tue', 'web', 'thu', 'fri', 'sta', 'sun'];

for (const day of days) {
  restaurant.openingHours[day]?.open === undefined && //with[day] brackets i use variable value as a property name
    console.log(`${day} is closed`);
  restaurant.openingHours[day]?.open !== undefined &&
    console.log(`${day} is open`);
}
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; //?? because on sat it opens at 0 and 0 in a falsy value
  //so it will say sat closed
  console.log(`on ${day}, we open at ${open}`);
}

//we can use optimal chaining to check if a method exists in order to call it
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//ARRAYS
const users = [
  { name: 'jonas', email: 'hello' },
  { name: 'giorg', email: 'hello2' },
];
console.log(users[0]?.email ?? 'User array emply');
console.log(users[1]?.email ?? 'User array emply');


//we can loop over objects which are not iterables. But in indirect way
//const days1 = ['mon', 'tue', 'web', 'thu', 'fri', 'sta', 'sun'];
const properties = Object.keys(openingHours); //Object Keys are property names
console.log(properties);
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);
const values = Object.values(openingHours); //values are the values of the propertis
console.log(values);

const entries = Object.entries(openingHours); //returns index number and the elements itself
console.log(entries);

for (const x of entries) {
  console.log(`On ${x[0]} we open at ${x[1].open}`);
}
for (const [key, { open, close }] of entries) {
  //with destructuring
  console.log(`On ${key} we open at ${open}`);
}


////////////////////////////////////CODING CHALLENGE-MY TRY///////////////////////////////////////////////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...scorers) {
    //REST
    //compreses individual variables to array
    for (let i = 0; i < scorers.length; i++) {
      console.log(scorers[i]);
    }
    console.log(scorers.length);
  },
  createScorersProperty(scorers) {
    this.scorers = {};
    for (const scorer of scorers) {
      console.log(scorer);

      this.scorers[scorer] = this.scorers[scorer]
        ? this.scorers[scorer] + 1
        : 1;
    }
    //this.scorers[scorer];
  },
};
//1
const [players1, players2] = game.players; //Dectructuring players array in two smaller arrays
//console.log(players1, players2);
//2
let [gk, ...fieldPlayers] = players1; //REST ...fieldPlayers
//console.log(gk, fieldPlayers);
game.team1 = [game.team1, gk, fieldPlayers];
//console.log(game.team1);

[gk, ...fieldPlayers] = players2; //REST ...fieldPlayers
//console.log(gk, fieldPlayers);
game.team2 = [game.team2, gk, fieldPlayers];
//console.log(game.team2);
//3
const allPlayers = [...players1, ...players2]; //MERGER the two arrays with dectructuring of the two arrays
//console.log(allPlayers);
//4
game.players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
//console.log(game);
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
//console.log(team1, draw, team2);
game.players1Final ||= ['Thiago2']; //wont add cause game.players1Final is truthy
//6
//game.printGoals('Ronal', 'Messi', 'Lewad', 'salah');
//game.printGoals(...game.scored);

//7
//team1 < team2 && console.log('team 1');
//team2 < team1 && console.log('team 2');

let entries = game.scored.entries();
for (const [key, value] of entries) {
  console.log(`Goal ${key + 1} : ${value}`);
} //Once the loop has finished, the iterator will have reached the end of the array and will no longer have any more
//key/value pairs to return. However, the entries variable still refers to the original iterator object, so you can reuse it to iterate over the same array again, or over a different array if you choose to.
//Keep in mind that if you do reuse the entries variable to iterate over a different array, any existing for...of loops using that variable will be interrupted,
// since the iterator object will be reset to the beginning of the new array.
//To iterate over the game.scored array again using the for...of loop, i will need to create a new iterator by calling the entries() method again and assigning it to the entries variable
const odds = Object.values(game.odds);
let sum = 0;
for (const odd of odds) {
  sum += odd;
}

const ave = sum / odds.length;
console.log(ave);

const oddsObj = Object.entries(game.odds);
console.log(oddsObj);

for (const [key, value] of oddsObj) {
  console.log(`Odds for ${game[key]?.[0] ?? 'draw'} are ${value}`);
  //console.log(
  // `Odd of victory ${
  //   Array.isArray(game[key]) ? game[key][0] : 'draw'
  //  } is ${value}`
  //);
  //console.log((game[key] ||= 'Draw'));
}

//console.log(t1, t2, od);
//console.log(`Odd of vistory ${odds.}`)

game.createScorersProperty(game.scored);
console.log(game);

///////////////////////////////////////////////////////////END OF MY TRY//////////////////////////////////////////////////////////////
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);
//2
const odds1 = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'Draw' : `vistory ${game[team][0]}`;
  console.log(`odd of ${teamStr} is ${odd}`);
}
//BONUS
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

//SETS
//With ES6 we have sets(a collection of unique values, no duplicates) and maps in js

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
//Sets are iterables
//order is irrelevant

console.log(new Set('Jonas'));

console.log(ordersSet.size); //Size
console.log(ordersSet.has('Bread')); //Search
console.log(ordersSet.has('Pizza'));

ordersSet.add('Tortelinni'); //add to set
ordersSet.add('Tortelinni'); //ingored.Its already on the set
console.log(ordersSet);

ordersSet.delete('Pizza'); //delete
console.log(ordersSet);

//there is no need of getting data out of a set. Used more to see if a value is in a set or not

//ordersSet.clear(); //deletes everything
//console.log(ordersSet);

for (const order of ordersSet) {
  //Its iterable
  console.log(order);
}

//SOS - USE CASE
//We can use it to remove duplicate values of arrays
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size //to see how many differert values
);
//MAPS
//We use maps to match values to keys
//In objects keys are strings
//In MAPS we can have any key.Objects, Arryas other maps

const rest = new Map(); //empty map
rest.set('name', 'Clossico italiano');
rest.set(1, 'FIorenze');
rest.set(2, 'Lisbon'); //the set return the updated map
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Veggie', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We open')
  .set(false, 'We closed'); //because set returns the updated map we can do this

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //This value is either true of false
//here it is true because rest.get('open')=11 < time = 21 <  est.get('closed')=23.
//So after we have rest.get(true), which returns the value with key true, which is We open!

console.log(rest.has('categories'));
rest.delete(true); //deletes
console.log(rest);
//rest.clear();//clears the map
console.log(rest.size);

rest.set([1, 2], 'Test'); //and this**
console.log(rest);

console.log(rest.get([1, 2])); //we cant do that because this* refer to different spaces in mamory.They are two different arrays

//we can do this
console.log(rest.size);
const array = [1, 2];
rest.set(array, 'Test'); //and this****
console.log(rest);

console.log(rest.get(array)); //now this*** refer to the same space in memory

//DOM elements are also a special type of object
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest); //So we can map DOM elements to values we want in order to manipulate them

//Better way of populating MAPS
const question = new Map([
  ['question', 'What is the best programming language in the worlds?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question); //this is the same we get when we do Object.entries(OpeningHours).
//so we can do this const hoursMap = new Map(Object.entries(Opening Hours)), so we get here an array of arrays,a map
//remember this when we need a map and we have the object
//We convert object to iterable using Object.entries
//Iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  //bacause map is iterable we can use destructuring.We separate key and value
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = Number(prompt('Your answer'));
console.log(
  question.get('correct') === answer ? question.get(true) : question.get(false)
);
console.log(question.get(question.get('correct') === answer));

//when we need to convert a map in an array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);

console.log([...question.values()]);

//SOURCE OF DATA
From the program itself
Form the UI :input from user of written in DOM 
From external sourses, web API

From these we get collection of data
and we store them to data structues
If we need a simple list of values <- Array or Set
If we need key, value pairs <- Object or Map. Key describes the values

DATA FROM APIS USUALLY COME IN JSON(A string but can easily converted to JS objects, because it uese the same formating as obejcts and arrays)
other built-In data structures : WeakMap, WeakSet
non built in structures we use : stacks, queues, Linked lists, trees, hash tables

Arrays vs Sets(If we need a simple list of values)
If ordered and we need duplicates. And to manipulate data < - arrays
unique values,we high performance is really importand(search,deleting 10 times faster than arrays), used to remove duplicates

Objects vs Maps(If we need key, value pairs)

easier to write and access values with . and [] <- objects . if we need functions as values.When working with JSON we convert to objects
better performance, keys any data type, easy iterate, easy to compute size <- maps . used to map keys in values and we need keys that are not strings

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
//1
const events = new Set();
console.log(events);
for (const [key, value] of gameEvents) {
  events.add(value);
}
//const events = [...new Set(gameEvents.values())];
//2
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
//3

const keys = [...gameEvents.keys()];
console.log(keys);
let sum = 0;
let prev = 0;
for (const key of keys) {
  sum += key - prev;
  prev = key;
}

console.log(
  `An event happened on average every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();

console.log(
  `An event happened on average every ${time / gameEvents.size} minutes`
);

console.log(sum / 10);
//4
for (const [min, value] of gameEvents) {
  //console.log(
  //  min <= 45 ? `[FIRST HALF] ${min}: ${value}` : `[SECOND] ${min}: ${value}`
  //);
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${value}`);
}
//STRIIIIIIIINGGGGSSSS

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(airline[0]);
console.log(airline[1]);
console.log(airline[4]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); //returns a new string
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' '))); //We get the first word. It return everything until the first ' '
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //+1 it gets the string after the ' '
console.log(airline.slice(-3)); //Starts slicing from the end
console.log(airline.slice(8, -4));

const checkMiddleSeat = function (seat) {
  const pos = seat.slice(-1);
  pos === 'B' || pos === 'E'
    ? console.log('Middle')
    : console.log('Not Middle');
};
checkMiddleSeat('11E');
//whenever we call a method on a string(slice,indexOf...) JS automatically behind the scenes will 
//convert that string primitive to a string object with the same content. And its on that objects that the methods are called
//All string methods return string primitives

const airline2 = 'TAP Air Portugal';
console.log(airline2.toLowerCase);
console.log(airline2.toUpperCase);

let passenger = ' MpaStRde';
passenger = passenger.trim(); //there is trimStart and trimEnd to trim white spaces from stand or end
const passengerL = passenger.toLowerCase();
passenger = passengerL[0].toUpperCase() + passengerL.slice(1);
console.log(passenger);

//replacing
//a
const priceGB = '288.97%';
//const price = priceGB.slice(0, -1);
//const priceUS = Number(price) * 1.18 + '$';
//console.log(priceUS);
//b
let priceUS = priceGB.replace('%', '$'); //replaces the first occurance
console.log(priceUS);
priceUS = priceUS.replace(
  priceGB.slice(0, -1),
  Number(priceGB.slice(0, -1)) * 1.18
);
console.log(priceUS);
const announc = 'All passengers door 23. Boarding door 23';
//console.log(announc.replaceAll('door', 'gate'));//replaces all occurances
console.log(announc.replaceAll(/door/g, 'gate')); //regex

//booleans
const plane = 'Airb320neo';
console.log(plane.includes('A'));
console.log(plane.startsWith('Airb'));
console.log(plane.endsWith('Neo'));

//console.log('a+very+nice+string'.split('+')); //splits string into an array\
const names = 'Antonis Chouvardas'.split(' ');

const [first, scond] = names;
//console.log(first, scond);

const newName = ['Mr.', first, scond.toUpperCase()].join(' ');
//console.log(newName);

const capitalizeName = function (name) {
  const splitted = name.split(' ');
  let nameCps = '';
  for (let nm of splitted) {
    nm = nm.replace(nm[0], nm[0].toUpperCase());
    console.log(nm);
    nameCps += nm + ' ';
  }
  nameCps = nameCps.trim();
  console.log(nameCps);
};
capitalizeName('antonis ioannis chouvardas popi');

//PADDING STRINGS
const msg = 'Go to gate 23!';
console.log(msg.padStart(25, '+')); //If we want string to have a certain length

console.log(text);
const maskCreditCard = function (number) {
  const str = String(number);
  console.log(str.slice(-4).padStart(14, '*'));
};

maskCreditCard(18574635285968);

console.log('yo'.repeat(5));
//CODING CHALLENGE 4
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

function camel(str) {
  str = str.toLowerCase();
  //console.log(str);
  const indxOfPv = str.indexOf('_'); //where is the '_'
  str = str
    .replace(str[indxOfPv] + str[indxOfPv + 1], str[indxOfPv + 1].toUpperCase())
    .trim();
  str = str.padEnd(20, ' ');
  return str;
}
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  //console.log(text);
  const arr = text.split('\n');
  let i = 1;
  for (const wrd of arr) {//IF I WANT TO DESTRUCTURE IT for (const [key,value] of arr.entries())
    console.log(`${camel(wrd)}${'✅'.repeat(i)}`);
    i++;
  }
  //console.log(arr);
});


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
*/
