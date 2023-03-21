/*
//JAVASCRIPT FUNDAMENTALS PART 1


//VARIABLES

//-----------------------------------------------------

// If you use const to name a value, it tells anyone looking at your code that this name will never be 
// assigned to a different value. Any time they see this name, they will know what it refers to.
//Use const when you can, and use let when you have to.

//This means that if you can initialize a variable when you declare it, and don't need to reassign 
//it later, make it a constant.

//let(is blog scopped) can change
//const is constant
//var(ES5, is function scopped) works similar with let. Have many differences
    let js = 'amazing';
    let country = 'Greece';
    let continent = 'Europe';
    let population = 10000000;

    console.log(country," is in ",continent," and has ",population);

    const isItLand = true;
    let population = 10000000;
    const country = "Greece";
    const language = "Greek";

    console.log(typeof isItLand);
    console.log(typeof population);
    console.log(typeof country);
    console.log(typeof language);

    console.log(population/2," is half the population");

    population ++;

    console.log(population);

    let isBiggerThan = population > 6000000;

    if (isBiggerThan === true) console.log("Is bigger than Finland");

    isBiggerThan = population >33000000;

    if (isBiggerThan === true) console.log("Is bigger than this country");
    else console.log("Is smaller than this country");

    let description = "Portugal is in Europe, and its 11 million  people speak portuguese"

    console.log(description);

    let marcWeight = 78;
    let marcHeight = 1.69;
    let johnWeight = 92;
    let johnHeight = 1.95;

    let marcBMI = marcWeight/(marcHeight**2);
    console.log(marcBMI);
    let johnBMI = johnWeight/(johnHeight**2);
    console.log(johnBMI);

    let marcHigherBMI = marcBMI > johnBMI;

    if (marcHigherBMI === true) console.log("Marc is higher");
    else ("Marc is shorter");


    marcWeight = 95;
    marcHeight = 1.88;
    johnWeight = 85;
    johnHeight = 1.76;

    marcBMI = marcWeight/(marcHeight**2);
    console.log(marcBMI);
    johnBMI = johnWeight/(johnHeight**2);
    console.log(johnBMI);

    marcHigherBMI = marcBMI > johnBMI;

//TEMPLATE LIBERALS

//-----------------------------------------------------------

    if (marcHigherBMI === true) {
        console.log(`Marc's BMI ${marcBMI} is higher than John's BMI
                    ${johnBMI}`) 
    }else console.log(`John's BMI ${johnBMI} is higher than Marc's BMI
                    ${marcBMI}`);

    let population = 11000000;
    const country = "Portugal";
    const continent = "Europe";
    const language = "Portuguese";

    let description = country + " is in " + continent + ", and \n\
    its " + population +" people speak " + language;
    console.log(description);

    description = `${country} is in ${continent}, and 
    its ${population} people speak ${language}`;
    console.log(description);  // Template Literals

//TYPE CONVERSION

//--------------------------------------------------------------

    const inputYear = '1991';
    console.log(Number(inputYear), inputYear);//Number conversion
    console.log(Number(inputYear) + 18);

    console.log(Number('Jonas'));//NaN (NaN is a number)
    console.log(typeof Nan);

    console.log(String(23), 23);//String conversion

    console.log(Boolean(1)); true //Boolean conversion

 //TYPE COERSION

 //--------------------------------------------------------------

    console.log('I am ' + 23 + ' years old');
    console.log('23' + '10' + 3);//23103 with '+' 3 is turned to string
    console.log('23' - '10' - 3);// 10 with '-' everything becomes num
    console.log('23' * '2');//46

    let n = '1' + 1;//11
    n = n - 1;
    console.log(n);//10
    console.log(2+3+4+'5')//95
    console.log('10'-'4'-'3' -2 +'5')// 15 
    console.log('9' - '5'); // 4
    console.log('19' - '13' + '17');//617
    console.log('19' - '13' + 17)//23
    console.log('123' < 57)//false
    console.log(5 + 6 + '4' + 9 - 4 - 2)//1143

 
 

// FALSY VALUES: 0, '' , undefined , null , NaN

//STRICT(===) AND LOOSE(==)

//-----------------------------------------------------------------------

// === is the strict operator : 18 === 18 is true (is wont do type coersion)
//                              18 === '18' is false (mainly use ===) strict not equal -> !==
// == is the loose operator : 18 == '18' is true (does the coersion) loose not equal -> !=

//IF STATEMENT

//-----------------------------------------------------------------------


    const fav = prompt("favourite number?");
    console.log(fav);
    console.log(typeof fav);

    if (Number(fav) === 23){
        console.log('23?');
    }

    const dolphAverage = (96 + 108 + 89)/3;
    const koalasAverage = (88 + 91 + 110)/3

    console.log(dolphAverage, koalasAverage);

    if ((dolphAverage>=100) || (koalasAverage>=100)){
        if ((dolphAverage > koalasAverage) && (dolphAverage>=100)) 
            console.log("Dophines won")
        else if ((dolphAverage < koalasAverage) && (koalasAverage>=100))
            console.log("Koalas won")
        else 
            console.log("Its a draw");
    } else {
        console.log("Nobody wins the trophy");
    }

    const isItLand = true;
    let population = 13000000;
    const country = "Greece";
    const language = "Greek";

    const AVERAGE = 33000000;

    if (population > AVERAGE){
        console.log(`${country}'s population is above average`);
    } else {
        console.log(`${country}'s population is ${AVERAGE - population} below average`)
    }

    const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
    if (numNeighbours === 1){ //if no conversion above the === wont work,but == will.
        console.log("Only 1 border");
    }else if (numNeighbours > 1) {
        console.log("More than 1 border");
    }else{
        console.log("No borders");

    }
    const isItLand = true;
    let population = 13000000;
    const country = "Portugal";
    const language = "English";

    if ((isItLand === true) && (language === "English") && (population<50000000)){
        console.log(`You should live in ${country}`)
    }else {
        console.log(`${country} is not for you`)
    }

    const day = 'monday';

//SWITCH STATEMENT

//-------------------------------------------------------------

    switch(day){
        case 'monday':
            console.log('Its monday');
            break;
        case 'tuesday':
            console.log('Its not monday');
            break;
        case 'wednesday':
            console.log('Its not monday');
            break;
        case 'thursday':
            console.log('Its not monday');
            break;
        case 'friday':
            console.log('Its not monday');
            break;
        default:
            console.log('Weekend');
    }
//EXPRESSION IS A PIECE OF CODE THAT PRODUCES A VALUE(3+4)
//STATEMENT IS A BIGGER PIECE OF CODE THAT DONT PRODUCES ANY VALUE BUT ACTIONS(if statements)


//TENARY EXPRESSION

//------------------------------------------------------------------------

    const age = 15;
    age >= 18 ? console.log("Can drinks") //? if
            : console.log("Cant drink") //: else

    const drink = age >= 18 ? 'wine'
                            : 'water'
    console.log(drink);

//TENARY EXPRESSIONS can be used as EXPRESSIONS iside of a TEMPLATE LITERAL

//--------------------------------------------------------------------------

    console.log(`I like to drink ${age >= 18 ? 'wine'
                                            : 'water'}`)

    const bill = 150;

    const tip = bill >= 50 && bill <= 300 ? 0.15*bill
                                        : 0.20*bill

    console.log(`The bill was ${bill} and the tip ${tip}
                ...so total ${bill+tip}`)


//JAVASCRIPT RELEASES:ES5,ES6+ AND ESNext

//-----------------------------------------------------------------

//We use Babel to convert our JavaScript code back to version ES5
//to ensure browser compatibility of all user.This must happen because 
//Javascript is not forwards compatible cause current browsers will
//not understand code from the future
//To make it compatible for a browsers we use Babel to covert it to ES5
//because every browser can understand it.

//CHECK ES6 COMPATIBILITY TABLE

*/
