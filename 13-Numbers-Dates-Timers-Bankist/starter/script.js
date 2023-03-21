'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2023-02-23T07:42:02.383Z',
    '2023-03-11T09:15:04.904Z',
    '2023-03-12T10:17:24.185Z',
    '2023-03-13T14:11:59.604Z',
    '2023-03-14T17:01:17.194Z',
    '2023-03-15T23:36:17.929Z',
    '2023-03-16T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const options = {
    style: `currency`, // 'percent'
    //unit: 'mile-per-hour', //check documantation 'celcius
    currency: acc.currency,
    //useGrouping: false,
  };

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = acc.movementsDates.at(i);
    //const date1 = Math.floor(new Date(currentValue.textContent).getTime());
    const displayDate = formatMovementDate(date, currentAccount.locale);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div><div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatCur(
          mov,
          acc.locale,
          acc.currency
        )}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/////////////////////////CALC AND DISPLAY BALANCE/////////////////////////////
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCur(
    acc.balance,
    acc.locale,
    acc.currency
  )}€`;
  labelDate.textContent = `${formatDate(new Date())}`;
};

///////////////////////CALC  DISPLAY SUMMARY///////////////////////
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

/////////////////////////CREATE USERNAMES/////////////////////////////////
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
//////////////////////FORMATING DATE/////////////////////
const formatDate = function (date) {
  date = new Date(date);
  const day = `${date.getDate()}`.padStart(2, 0); //always to numbers and if its 1 then add 0 to the beginning
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();
  return `${month}/${day}/${year}, ${hour}:${min}`;
};
const formatMovementDate = function (date, locale) {
  date = Math.floor(new Date(date).getTime());
  const days = daysPassed3(Date.now(), date);

  /*if (days === 0) {
    currentValue.textContent = 'Today';
  } else if (days === 1) {
    currentValue.textContent = 'Yesterday';
  } else if (days === 2) {
    currentValue.textContent = 'Day before Yesterday';
  } else if (days < 30) {
    currentValue.textContent = `${days} days ago`;
  }*/
  return Intl.DateTimeFormat(locale).format(date);
};
/////////////FORMAT CURRENCY//////////////////
const formatCur = function (value, locale, curr) {
  console.log(value, locale, curr);
  const options = {
    style: `currency`, // 'percent'
    //unit: 'mile-per-hour', //check documantation 'celcius
    currency: curr,
    //useGrouping: false,
  };
  return new Intl.NumberFormat( //intenralization of the currencies
    locale, //formated in the local way
    options
  ).format(value.toFixed(2));
};
////////////////////UPDATE UI//////////////////////
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount; //= account1; always logged in
//updateUI(currentAccount);
//containerApp.style.opacity = 100;

/////INTERNALIZATION API///
/*const now = new Date();
const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};
const locale = navigator.language;//getiing the users language
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now); //iso language code table
*/

//console.log(locale);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    console.log(now);
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    //const locale = navigator.language; //getiing the users language from the browser

    console.log(labelDate.textContent);
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now); //iso language code table
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value; //was Number(inputTransferAmount.value). JS engine sees the + and by type coersion makes it a number
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //add dates
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value); //floor does the ype coersion as well

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function () {
      //waits 2,5 secs to do it
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

const daysPassed3 = function (date1, date2) {
  return Math.round(Math.abs(date2 - date1) / (24 * 60 * 60 * 1000));
};
//change dates
document
  .querySelector('.movements__date')
  .addEventListener('click', function () {
    const dates = Array.from(
      document.querySelectorAll('.movements__date'),
      function (el) {
        return el;
      }
    );
    console.log(dates);
    dates.reduce(function (accumulator, currentValue, i) {
      console.log(currentValue.textContent);
      const date1 = Math.floor(new Date(currentValue.textContent).getTime());
      console.log(new Date(date1));
      const days = daysPassed3(Date.now(), date1);
      console.log(days);
      if (days === 0) {
        currentValue.textContent = 'Today';
      } else if (days === 1) {
        currentValue.textContent = 'Yesterday';
      } else if (days === 2) {
        currentValue.textContent = 'Day before Yesterday';
      } else if (days < 30) {
        currentValue.textContent = `${days} days ago`;
      }
      return accumulator;
    }, '');
  });
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log(0.1 + 0.2 === 3);
//all number are atored in a 64 base 2
//conversion
console.log(Number('23'));
console.log(+'23'); //js sees the + and does type coersion to number. it converts all operants to numbers

//parsing

console.log(Number.parseInt('30px', 10)); //gets the number.It need to start with a number.!0 is the numbers base.If working with binary ->2
console.log(Number.parseInt('e23'));

console.log(Number.parseFloat('2.5rem'));
//parseInt and parseFloat are global
console.log(parseFloat('2.5 rem'));
//Number is the name space for all the function it has
console.log(Number.isNaN(20)); //checks if its non a number
console.log(Number.isNaN('20')); //isnt non a number. it a regular value
console.log(Number.isNaN(+'20X'));
console.log('--------------------------------------------------');
//best way of checking is the value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(20 / 0));
//IS INTEGER
console.log('--------------------------------------------------');
console.log(Number.isInteger(20));
console.log(Number.isInteger('20'));
console.log(Number.isInteger(+'20X'));
console.log(Number.isInteger(20 / 0));
//SQUARE ROOT
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
//MAX
console.log(Math.max(5, 6, 10, 45, 3));
//MIN
console.log(Math.min(5, 6, 10, 45, 3));
//calculate circle
console.log(Math.PI * Number.parseFloat('10px') ** 2); //calculate the array of the circle with this -> 10px radious
//random values
const randomInt = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
};
console.log(randomInt(5, 10));
console.log('--------------------------------------------------');
//Rounding Integers..This methods also do type coersion
console.log(Math.trunc(24.5));
console.log(Math.round(24.5));
console.log(Math.ceil(23.1));
console.log(Math.ceil(23.9));
console.log(Math.floor(23.1));
console.log(Math.floor(23.9));
//..This methods also do type coersion
console.log(Math.trunc('23.6'));
//floor and trunc remove the decimal part when we are dealing with positive numbers
console.log('--------------------------------------------------');
console.log(Math.trunc(-24.5));
console.log(Math.floor(-24.5)); //floor is -25
console.log(Math.ceil(-24.5)); //ceil is -24.....
//floor is better because it works with positive and negative numbers
const randomInt2 = function (min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};
console.log(randomInt2(-5, 10));

//rounding decimals
console.log((2.7).toFixed(0)); //returns a string rounded to the number of decimals in the()
console.log((2.7).toFixed(2));
console.log((2.7).toFixed(7));
console.log(+(2.7543453425).toFixed(3)); //+ converts it to number

//REMAINDER OPERATOR
console.log(5 % 2);
console.log(5 / 2);
console.log(+'fjnd');
//numeric separator
const diameter = 287460000000;
const diameter1 = 287_460_000_000;
console.log(diameter);
console.log(diameter1);
//can show to the prorgammer that the number is for examples sents
const price = 345_99;
console.log(price);
const transferFee = 15_00;
console.log(transferFee);

//BIGINT
//ES2020 NEW PRIMITIVE
console.log(1283948972693179467815286534n); //n turns the number into a big int

/////////////////////////////////DATES//////////////////////////
const now = new Date();
console.log(now);
console.log(new Date('Mar 16 2023'));
console.log(new Date('December 24, 2015'));
console.log(new Date(1994, 0, 20, 16, 23, 89)); //year,month,day,hour,min,sec
console.log(new Date(0)); //unix time
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //3 days after
console.log(new Date(3 * 24)); //unix time
console.log('--------------------------------------------------');
const future = new Date(2040, 10, 20, 14, 35);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); //0 based.month mumber 11
console.log(future.getDate()); //the day of the month
console.log(future.getHours());
console.log(future.getDay()); //the day of the week.sunday is 0
console.log(future.toISOString()); //universal formated
console.log(future.toDateString()); //
console.log(future.toLocaleString()); //
console.log(future.toLocaleDateString()); //
console.log(future.getTime()); //in milisec from unix time
console.log(new Date(2237027700000)); //converts it
console.log(Date.now());
//////setter//////
future.setFullYear(2025);
console.log(future);
*/
//operation with dates ->must be done on miliseconds
const future = new Date(2037, 10, 19);
const past = new Date(2023, 2, 13);
console.log(future);
console.log(+future);

const daysPassed = function (date1, date2) {
  return Math.abs(date2 - date1) / (24 * 60 * 60 * 1000);
};
const daysPassed1 = daysPassed(Date.now(), past);
console.log(daysPassed1);

/////INTERNALIZATION API///-->>>>>****
//International Dates
//Internationalization of numbers
/*
const num = 39823495709.23;
const options = {
  style: 'currency', // 'percent'
  unit: 'mile-per-hour', //check documantation 'celcius
  currency: 'EUR',
  useGrouping: false,
};
console.log('US:        ', new Intl.NumberFormat('en-US', options).format(num));
console.log(
  'Greece:        ',
  new Intl.NumberFormat('gre', options).format(num)
);
console.log(
  'Germany:        ',
  new Intl.NumberFormat('de-DE', options).format(num)
);*/
///////////////////////TIMERS : SETTIMEOUT(RUNS ONCE) AND SETINTERVAL(UNTIL WE STOP IT)//////////////////////////
///////setTimeout
const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  function (...ingredients) {
    //rest
    //when js engine comes here it registers the function to be called 3 secs later
    //after that immitidately it continues to the next line(asynchronus JS)
    console.log(`your pizza with ${ingredients.join(' and ')}`);
  },
  3000,
  ...ingredients //spread
); //the arguments after the delay(3000) will be arguments of the call back function
console.log('waiting...'); //notice that this happens anyway. the timer will not affect it

//if (ingredients.includes('spinach')) clearTimeout(pizzaTimer); //cancels timer

//setTimeout
setInterval(function () {
  //runs on the background and executes every 25 seconds
  //
  const now = new Date();
  console.log(now);
}, 25000);
