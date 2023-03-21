/*
//STRICT MODE : makes it easier to write secure JS code(helps to avoid errors and bugs.Tells with erros messages)

//-----------------------------------------------------------

'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("i can drive")

//FUNCTIONS

//-----------------------------------------------------------



function logger(){
    console.log('My name is Ant');
}

logger();


function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oragnes`;
    return juice;
}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

function describeCountry(country, population, capitalCity){
    return `${country} has 6 million people and its capital city in Helsinki`
}

const description = describeCountry("Finland" ,6000000, "Helsinki")
console.log(description)

//FUNCTION DECLERATION(CAN USE BEFORE DECLARE)

function calAge(birthYear){
    const age = 2037 - birthYear;
    return age;
}
const age1 = calAge(1994);
console.log(age1);

function percentageOfWorld1(population){
    const percentage = (100*population)/7900000000;
    return percentage;
}

console.log(percentageOfWorld1(1441000000));

//FUNCTION EXPRESSION(CANNOT USE BEFORE DECLARE)

const calcAge2 = function(birthYear){//The variable is the function
    const age = 2037 - birthYear;
    return age;
}

const age2 = calcAge2(1994);
console.log(age1)

population = 1441000000;

const percentageOfWorld2 = function(population){
    const percentage = (100*population)/7900000000;
    return percentage;
}

console.log(percentageOfWorld1(1441000000));


//ARROW FUNCTION

const calcAge3 = birthYear => 2037 - birthYear;//return missing because it is a one-lines

const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirment = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstname} retires in ${retirement}`
}

console.log(yearsUntilRetirment(1994), 'Antonis');
console.log(yearsUntilRetirment(1993), 'Giwrgos');

const percentageOfWorld3 = (population) => {
    const percentage = (100*population)/7900000000;
    return percentage;
}

console.log(percentageOfWorld3(1441000000))

//CALLING FUNCTIONS FROM OTHER FUNCTIONS

function cutFruidPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples, oranges){
    const applesPieces = cutFruidPieces(apples);
    const orangePieces = cutFruidPieces(oranges)
    console.log(applesPieces, orangePieces);
    const juice = `Juice with ${apples} apples and ${oranges} oragnes`;
    return juice;
}
const appleJuice2 = fruitProcessor(2,3);
console.log(appleJuice2);


const countr1 = "China";
const population1 = "1441000000";
const describePopulation = (country1, population1) => {
    return `${country1} has 1441 million people, which is about ${percentageOfWorld3(population1)}`
}

console.log(describePopulation(countr1,population1));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE #1
//-----------------------------------------------------------------------------------
    "use strict";

    const calcAverage = (num1, num2 , num3) => {
        const average = (num1 + num2 + num3)/3;
        return average;
    };

    let scoreA1 = 1;
    let scoreA2 = 1;
    let scoreA3 = 1;

    const AveA = calcAverage(scoreA1, scoreA2, scoreA3);
    console.log(AveA)

    let scoreB1 = 5;
    let scoreB2 = 7;
    let scoreB3 = 7;

    const AveB = calcAverage(scoreB1, scoreB2, scoreB3);
    console.log(AveB)


    const chechWinner = function (pointsA, pointsB) {
        if (pointsA >= 2 * pointsB) {
            console.log(`Dolphins win (${pointsA} vs. ${pointsB})`)
        }else if (pointsB >= 2 * pointsA){
            console.log(`Koalas win (${pointsB} vs. ${pointsA})`)
        }else 
            console.log(`No winner`)
    }

    chechWinner(AveA,AveB)

//ARRAYS
//-------------------------------------------------------------------------------------------

    const friends = ['GiwrgosA','GiwrgosB','Alex', 'Jimbo'];
    const years = new Array(1995,1987,1990,1988)

    console.log(friends, years)

    console.log(friends[0],years[2])

    console.log(friends.length);

    console.log(friends[friends.length-1]);

    friends[0] = "Drosinos"
    friends[1] = "Giannaros"

    console.log(friends);
//The reason that, even though friends in const, we can change it, is because it is not a primitive value
//const blocks changes in primitive value
//Also we cant do this ---> friends = ['bob, 'Eve'] You cant replace the whole array

    const firstName= 'Ntons';
    const Ntons = [firstName, "Chouvardas", 2023-1994, "Programmer", friends];

    console.log(Ntons);
    console.log(Ntons[Ntons.length-1]);

//ARRAY METHODS
//-----------------------------------------------------------------------------------

//ADD ELEMENTS

    const friends1 = ['GiwrgosA','GiwrgosB','Alex', 'Jimbo'];
    const newLength = friends1.push('Mike');// Push is embeded on friends.It adds the element
                                        //at the end of the array. It returns the lenght of the new array

    console.log(friends1);
    console.log(newLength);

    friends1.unshift('Nikolas');// Adds elements at the beginning fo the array. It also RETURNS the lenght fo the array

    console.log(friends1)

//REMOVE ELEMENTS
    const popped = friends1.pop();//From the end. RETURNS the popped element
    const removed = friends1.shift();//From the beginning

    console.log(popped);
    console.log(removed);

    console.log(friends1.indexOf("Alex"))
    console.log(friends.includes('Bitch'))
//CODING CHALLENGE #2
    const calcTip = bill => {
        //return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2
        if ((bill >= 50) && (bill <= 300))
            return (15 * bill)/100
        else 
            return (20 * bill)/100
        
    }

    console.log(calcTip(100));

    const bills = [100, 200, 400];

    const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

    const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];

    console.log(tips);
    console.log(totals[0]);

//OBJECTS

    const Ntons1 = [firstName, "Chouvardas", 2023-1994, "Programmer", friends];//ARRAY, the order matter. We should use array for ordered data

    const Dons = {//OBJECT, order doens not matter if we want to retrieve them. For more unstructured data
        firstName : 'Antons',
        lastName : 'Chouvardas',
        age : 2023-1994,
        job : "Programmer",
        friends : friends
    }
//DOT NOTATION VS BRACKET NOTATION
    console.log(Dons.firstName);
    console.log(Dons['firstName']);//inside [] we can put any EXPRESSION that we like
                                   //So we use [] notetion when we need to calculate
                                   //the attribute name
        const nameKey = 'Name';
        console.log(Dons['first'+nameKey]);
        console.log(Dons['last'+nameKey]);
    const interestedIn = prompt('What do you want to know about Dons?');
    

    if (Dons[interestedIn]){
        console.log(Dons[interestedIn]);
    }else {
        console.log("Wrong");
    }

//Adding attributes to the OBJECT
    Dons.location = 'Portugal';
    Dons['twitter'] = '@Ant';
    
    console.log(Dons);

    const exercise = `${Dons['firstName']} has ${Dons.friends.length} friends, and his best friend is called ${Dons.friends[0]}` 
    console.log(exercise)

//OBJECT METHODS

    const Dons1 = {
        firstName : 'Antons',
        lastName : 'Chouvardas',
        birthYear : 1994,
        job : "Programmer",
        friends : friends,
        hasDriversLicense : false,
        //FUNCTION VALUE
        //calcAge: function(birthYear){//Every function attached to a method is a method
            //return 2023 - birthYear;
       //}
       //calcAge: function(){//Every function attached to a method is a method//This is not ideal
                             // because if we want the age often, every time it will be calculated
            //console.log(this);//this refers to Dons1 node
        //    return 2023 - this.birthYear;
        calcAge: function(){//We use this way to make it an attribute and store it
            this.age = 2023 - this.birthYear;//We greate a new attribute to the object
            return this.age;
       },
       //Challenge
       getSummary: function(){
            this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he ${this.hasDriversLicense === true ? "has" : "has not"} a drivers license`;
            return this.summary;
       }
    };
    console.log(Dons1.calcAge());

    console.log(Dons1.age);//Χρησιμοποιώ το attribute κατευθείαν
    console.log(Dons1.age);
    console.log(Dons1.age);

    console.log(Dons1.getSummary());

    console.log(Dons1.summary);
    //console.log(Dons1.calcAge(Dons1.birthYear));//Dot notation
    //console.log(Dons1['calcAge'](Dons1['birthYear']));//Bracket notation

//CODING CHALLENGE #3
//------------------------------------------------------------------------------------------


    const Mark = {
        fullName : "Mark Wal",
        mass : 90,
        weight : 170, 

        calcBMI : function(){
            this.BMI = this.mass/(this.height**2);
            return this.BMI;
        }
    }

    const John = {
        fullName : "John Ch",
        mass : 80,
        weight : 180,

        calcBMI : function(){
            this.BMI = this.mass/(this.height**2);
            return this.BMI;
        }
    }
    console.log(`${Mark.calcBMI() > John.calcBMI() ? Mark.fullName : John.fullName}'s BMI is higher`)

//LOOPS
//-------------------------------------------------------------------------------------------


    const friends = ['GiwrgosA','GiwrgosB','Alex', 'Jimbo'];
    const ntons2 = ["Antonis", "Chouvardas", 2023-1994, "Programmer", friends];
    console.log(ntons2[0]);

    const types = [];

    for (let i = 0; i <= ntons2.length-1; i++){
        console.log(ntons2[i] , typeof ntons2[i]);

        types[i] = typeof ntons2[i];
    }
    console.log(types);

    const years = [1993, 1990, 1994, 1995];
    const ages = [];

    for (let i = 0; i < years.length; i++){
        ages[i] = 2023 - years[i];
    }
    console.log(ages);

    //Continue, Break

    for (let i = 0; i < ntons2.length; i++){
        if(typeof ntons2[i] !== 'string') continue;
        console.log(ntons2[i] , typeof ntons2[i]);
    }

    for (let i = 0; i < ntons2.length; i++){
        if(typeof ntons2[i] === 'number') break;
        console.log(ntons2[i] , typeof ntons2[i]);
    }

    for (let i = ntons2.length-1; i>=0; i--){
        console.log(ntons2[i] , typeof ntons2[i]);
    }

    let i = 0;
    while (i < ntons2.length){
        console.log(ntons2[i] , typeof ntons2[i]);
        i++;
    }

    let dice = Math.trunc(Math.random() * 6)  + 1;
    while (dice !== 6){
        console.log(dice);
        dice = Math.trunc(Math.random() * 6)  + 1;
    }
    console.log(dice);

//Excersises from PDF

    const populations = [10, 44, 34, 1441];

    console.log(populations.length === 4 ? true : false);

    for (let i = 0; i< populations.length; i++){
        console.log((populations[i] * 100)/7900);
    }

    const neighbors = ["Turkey", "Bulgaria", "Skopja"];
    console.log(neighbors)

    neighbors.push("Utopia");
    console.log(neighbors)

    neighbors.pop("Utopia");
    console.log(neighbors)

    console.log(neighbors.includes("Germany") ? "Central EU" : "Probably not central EU")

    neighbors[neighbors.indexOf("Bulgaria")] = "Republic of Bulgaria";

    console.log(neighbors)

    const myCountry = {
        country : "Greece",
        capital : "Athens",
        language : "Greek",
        population : 10,
        neighbors : neighbors,

        describe : function(){
            this.description = `${this.country} has ${this.population} milion
            ${this.language}-speaking people, ${this.neighbors.length} 
            neighboring countries and a caplita ${this.capital}`;

            return this.description;
        },

        checkIsLand : function(){
            this.isIsLand = this.neighbors.length > 0 ? true : false;
            return this.isIsLand;
        }
    }

    console.log(`${myCountry.country} has ${myCountry.population} milion
                ${myCountry.language}-speaking people, ${myCountry.neighbors.length} 
                neighboring countries and a caplita ${myCountry.capital}`)

    myCountry.population += 2;
    console.log(myCountry.population)
    myCountry['population'] -=2;
    console.log(myCountry.population)

    console.log(myCountry.describe());

    console.log(myCountry.checkIsLand());

    for (let i = 0; i<50; i++){
        console.log(`Voter number ${i} is currently voting`);
    }

    const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
    
    for (let i = 0; i < listOfNeighbours.length; i++){
        if (listOfNeighbours[i].length>1){
            for (let j = 0; j < listOfNeighbours[i].length; j++){
                console.log(listOfNeighbours[i][j]);
            }
        }
    }
    let i = 0;
    while (i < listOfNeighbours.length){
        if (listOfNeighbours[i].length>1){
            for (let j = 0; j < listOfNeighbours[i].length; j++){
                console.log(listOfNeighbours[i][j]);
            }
        }
        i++;
    }
//CODING CHALLENGE #4

    const bill = [100, 45, 65, 78, 200, 450, 32, 56, 30];
    const tips = [];
    const totals = [];

    const calcTip = bill => {
        //return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2
        if ((bill >= 50) && (bill <= 300))
            return (15 * bill)/100
        else 
            return (20 * bill)/100
        
    }

    for (let i = 0 ; i < bill.length; i++){
        tips[i] = calcTip(bill[i])
        console.log(tips[i])
    }
    console.log("/////////////////////////////////////////////////")
    for (let i = 0 ; i < bill.length; i++){
        totals[i] = bill[i] + tips[i];
        console.log(totals[i]);
    }
    const calcAverage = array =>{
        let sum = 0;
        for (let i = 0; i< array.length; i++){
            sum += array[i];
        }
        const average = sum/array.length;
        return average;
    }

    console.log(calcAverage(totals))
*/
