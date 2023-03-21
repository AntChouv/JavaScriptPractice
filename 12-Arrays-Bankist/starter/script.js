'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
/*
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);*/

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
//BUILT IN ARRAY METHODS
//SLICE ----> RETURNS NEW ARRAY
let arr = ['a', 'b', 'c', 'd', 'e'];
const nreArr = arr.slice(2); //returns new array
console.log(nreArr);
const nreArr1 = arr.slice(2, 4); //END PARAMETER IS NOT INCLUDED
console.log(nreArr1);
const nreArr2 = arr.slice(-1); //NICE TRICK TO GET THE LAST ELEMENT
console.log(nreArr2);
const nreArr3 = arr.slice(1, -1);
console.log(nreArr3);

/////CREATING SHALLOW COPY OF ARRAY
const shallowCopy = arr.slice();
console.log(shallowCopy);

//////////USING SPREAD OPERATOR
const shallowCopy2 = [...arr];
console.log(shallowCopy2);

//SΡLICE ----> MUTATES THE ARRAY
console.log(arr.splice(2)); //EXTRACTS FROM THE arr[2] AND ONWOARDS
console.log(arr);

/////COMMON USE CASE TO DELETE THE LAST ELEMENT OF AN ARRAY
let arr2 = ['a', 'b', 'c', 'd', 'e'];
arr2.splice(-1);
console.log(arr2);

/////DELETECOUNT
let arr3 = ['a', 'b', 'c', 'd', 'e'];
arr3.splice(2, 2);
console.log(arr3); //deletes arr3[2],arr4[3]

/////REVERSE ARR
let arr4 = ['a', 'b', 'c', 'd', 'e'];
arr4.reverse();
console.log(arr4);

/////CONCAT
let arr5 = ['a', 'b', 'c', 'd', 'e'];
let arr6 = ['f', 'g', 'h', 'i', 'j'];
const letters = arr5.concat(arr6);
console.log(letters);

/////////SPREAD OPERATOR
const letters2 = [...arr5, ...arr6];
console.log(letters2);

/////////JOIN METHOD
console.log(letters.join(' - '));

//NEW ES2022 METHOD
//AT METHOD(works in strings also)
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
//LAST ELEMENT
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)); //returns it in array form.we get it with [0]
console.log(arr.at(-1));

//FOR EACH(you cannot break, continue in a forEach loop)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`you withdrew ${Math.abs(movement)}`);
  }
}
movements.forEach(function (movement) {
  //FOR EACH IS A HIGH ORDER FUNCTION(it need a call back funtion in order to tell it what to do)
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`you withdrew ${Math.abs(movement)}`);
  }
});

//GETTING THE INDEXES
movements.forEach(function (movement, index, array) {
  //these three the forEach function passes to the call back function
  //order matters
  //FOR EACH IS A HIGH ORDER FUNCTION(it  need a call back funtion in order to tell it what to do)
  if (movement > 0) {
    console.log(`you deposited ${index + 1} : ${movement}`);
  } else {
    console.log(`you withdrew ${index + 1} : ${Math.abs(movement)}`);
  }
});

//FOR EACH WITH MAPS AND SETS

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesNew = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesNew);
currenciesNew.forEach(function (value, key, map) {
  //just a bug. can write (value, -value, map)
  console.log(`${key}: ${value}`); //set does not have keys or value features
});
*/
////////////////////////////BANKIST////////////////////////////
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
//NOTE*:Instead of working with global variables
//its best to pass the variable in the function
const displayMovements = function (movements, sort = false) {
  //default value false cause it appears not sorted
  containerMovements.innerHTML = ''; //innerHtml similar to textContent. Difference : textContent returns the text itself
  //innerHTML returns everything including the html of the element which is called upon.Here we use it as a setter
  const movs = sort
    ? movements.slice().sort(function (a, b) {
        return a - b;
      })
    : movements; //we take a hard copy with slice
  movs.forEach(function (value, key, arr) {
    const type = value > 0 ? 'deposit' : 'withdrawal';

    const htmlElement = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      key + 1
    } ${type}</div>
<div class="movements__date">3 days ago</div>
<div class="movements__value">${value > 0 ? value : Math.abs(value)}€</div>
</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', htmlElement);
  });
  //console.log(movements);
};
//displayMovements(account1.movements);
//console.log(containerApp.innerHTML);

const currBal = function (acc) {
  //adding balance attribute to the objects. We compute the balance by using reduce method
  console.log(acc.movements);
  const bal = acc.movements.reduce(function (accumulator, currentValue) {
    //accumulator -> SNOWBALL
    return accumulator + currentValue;
  }, 0); //0 is initial value.Similar as sum = 0;
  acc.currentBalance = bal;
};
//currBal(accounts);
//labelBalance.textContent = account1.currentBalance + '€';

const createUsernames = function (acc) {
  //Computing usernames and adding to the odject
  acc.forEach(function (value, key) {
    const username = value.owner //Nice trick
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');

    value.username = username;
  });
};
//createUsernames(accounts);

const findMaxDep = function (acc) {
  acc.forEach(function (value, key) {
    const max = value.movements.reduce(function (accumulator, currentValue) {
      return currentValue > accumulator ? currentValue : accumulator;
    }, value.movements.at(0));
    //console.log(max);
    value.maxDep = max;
  });
};
//findMaxDep(accounts);
//const labelSumIn = document.querySelector('.summary__value--in');
//const labelSumOut = document.querySelector('.summary__value--out');
//const labelSumInterest = document.querySelector('.summary__value--interest');
const calculateSummary = function (acc) {
  const deposits = acc.movements
    .filter(function (value, key) {
      return value > 0;
    })
    .reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  console.log;
  acc.depositSum = deposits;
  acc.withdrSum = deposits - acc.currentBalance;

  const interest = acc.movements
    .filter(function (value) {
      return value > 0;
    })
    .map(function (value) {
      console.log(value);
      return (value * acc.interestRate) / 100;
    })
    .filter(function (value) {
      return value >= 1;
    })
    .reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  acc.interestSum = interest ??= 0;
  //const depositSum = acc.movements.filter(function (mov) {
  //  return mov > 0; //condition of filtering
  // });
  //console.log(depositSum);
};
const updateUI = function (acc) {
  displayMovements(acc.movements);
  //calc the balance
  currBal(acc);
  //display balance
  labelBalance.textContent = acc.currentBalance + 'EUR';
  //calculating summary etc
  calculateSummary(acc);
  labelSumIn.textContent = acc.depositSum + '€';
  labelSumOut.textContent = acc.withdrSum + '€';
  labelSumInterest.textContent = acc.interestSum + '€';
};
createUsernames(accounts);
//localStorage.removeItem('account');

////////////////////////////////My try for logi in////////////////////////////
/*
btnLogin.addEventListener('click', function (e) {
  //prevents form from submiting. We do this because form element by default reloads after submitting
  //from element can invoke the click event by pressing enter
  e.preventDefault();

  const username = inputLoginUsername.value;
  const pass = Number(inputLoginPin.value);
  const account = accounts.find(function (acc) {
    return acc.username === username && acc.pin === pass;
  });
  if (account != undefined) {
    displayMovements(account.movements);
    containerApp.style.opacity = 100;
    currBal(account);
    labelBalance.textContent = account.currentBalance + 'EUR';
    calculateSummary(account);
    labelSumIn.textContent = account.depositSum + '€';
    labelSumOut.textContent = account.withdrSum + '€';
    labelSumInterest.textContent = account.interestSum + '€';
  }
});
*/
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //prevents form from submiting. We do this because form element by default reloads after submitting
  //from element can invoke the click event by pressing enter
  e.preventDefault();

  const username = inputLoginUsername.value;
  const pass = Number(inputLoginPin.value);
  currentAccount = accounts.find(function (acc) {
    //find account with username
    return acc.username === username;
  });
  if (currentAccount?.pin === pass) {
    //optional chaining method. If exists do this
    //show UI
    containerApp.style.opacity = 100;
    //show message top right
    labelWelcome.textContent = `Welcome ${currentAccount.owner}`;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    //clear the input field from writing cursor
    inputLoginPin.blur();

    //display list
    updateUI(currentAccount);
  }
});

///////////////////TRANSFERS MY TRY///////////////
/*
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const tranferTo = inputTransferTo.value;
  const amount = Number(inputTransferAmount.value);
  //put movement in senders movement array
  currentAccount.movements.push(-amount);
  //update balance
  currentAccount.currentBalance -= amount;
  //display new balance
  labelBalance.textContent = currentAccount.currentBalance + '€';
  //update withdrawal sum
  currentAccount.withdrSum += amount;
  //display withdrawal sum
  labelSumOut.textContent = currentAccount.withdrSum + '€';
  //find account to send to
  const accountToTransfer = accounts.find(function (acc) {
    return acc.username === tranferTo;
  });
  //put movement in receivers movement array
  accountToTransfer.movements.push(amount);
});
*/
////////////////////SOLUTION///////////////////
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const tranferTo = inputTransferTo.value;
  const amount = Number(inputTransferAmount.value);
  const accountToTransfer = accounts.find(function (acc) {
    return acc.username === tranferTo;
  });
  inputTransferAmount.value = inputTransferTo.value = '';
  //clear the input field from writing cursor
  inputTransferAmount.blur();
  if (
    amount > 0 &&
    accountToTransfer &&
    currentAccount.currentBalance >= amount &&
    accountToTransfer?.username !== currentAccount.username //?. if does exist return undefined
  ) {
    currentAccount.movements.push(-amount);
    accountToTransfer.movements.push(amount);
  }
  updateUI(currentAccount);
});

//displayMovements(account.movements);
//console.log(account.owner);
/*
/////////////CODING CHALLENGE//////////////////
//MYTRY
const juliaSt = {
  ages: [3, 6, 2, 5, 6],
  changeArr() {
    const newArr = this.ages.slice(1, 3);
    return newArr;
  },
};

const kateSt = {
  ages: [2, 7, 7, 1, 9],
};
const checkAges = function (arr1, arr2) {
  const arr = [...arr1, ...arr2];
  arr.forEach(function (value, key) {
    console.log(
      `Dog number ${key + 1} is a${
        value > 3 ? 'n adult' : ' puppy'
      } and is ${value} years old`
    );
  });
};
checkAges(juliaSt.changeArr(), kateSt.ages);


/////////////////SOME BIG AN IMPORTAND ARRAY MATHODS
///MAP :another method to loop over arrays(similar to forEach, with the difference that map creates an array based on the original)
///it map the elements of the first array to the elements of the new one
  const eurToUsd = 1.1;
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const movementsUsd = movements.map(function (mov) {//has same arguments a forEach(key,value,map)
    return mov * eurToUsd;
  });

  const movementsUsd2 = movements.map((mov) => mov * eurToUsd);

  console.log(movements);
  console.log(movementsUsd);
  movements.map()
///FILTER : Used to filter the original array besed on a contition. returns an array containign the array elements
//that passed a specified test condition

  const deposits = account1.movements.filter(function (mov) {
    return mov > 0; //condition of filtering
  });
  console.log(deposits);

  const withdrawals = account1.movements.filter(function (mov) {
    return mov < 0;
  });
  console.log(withdrawals);

///REDUCE : Boils all array elements down to one sigle value(e.g adding all elements together)
//currBall method

///////////////////////CODING CHALLENGE 2////////////////////////
const calcAverageHumanAge = function (ages) {
  const hum = ages
    .map(function (value) {
      return value > 2 ? 16 + value * 4 : value * 2;
    }) //2
    .filter(function (age) {
      return age >= 18;
    });
  console.log(hum);
  //3
  const average =
    hum.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0) / hum.length;
  console.log(average);
  //by chaining all methods together
  const average1 = ages
    .map(function (value) {
      return value > 2 ? 16 + value * 4 : value * 2;
    }) //2
    .filter(function (age) {
      return age >= 18;
    })
    .reduce(function (accumulator, currentValue, i, arr) {
      return accumulator + currentValue / arr.length;
    }, 0);
  console.log(average1);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//////////////////////CHAINING METHODS//////////////////////
//PIPELINE
//console.log(accounts);
const deposits = account1.movements.filter(function (mov) {
  return mov > 0; //condition of filtering
});
//console.log(deposits);

const withdrawals = account1.movements.filter(function (mov) {
  return mov < 0; //condition of filtering
});
*/
//console.log(withdrawals);
//console.log(accounts);
//const labelSumIn = document.querySelector('.summary__value--in');
//const labelSumOut = document.querySelector('.summary__value--out');
//const labelSumInterest = document.querySelector('.summary__value--interest');

////////////////CODING CHALLENGE 3///////////////////////
/*
const calcAverageHumanAge = function (ages) {
  const hum = ages
    .map(function (value) {
      return value > 2 ? 16 + value * 4 : value * 2;
    }) //2
    .filter(function (age) {
      return age >= 18;
    });
  console.log(hum);
  //3
  const average =
    hum.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0) / hum.length;
  console.log(average);
  //by chaining all methods together with arrow function
  const average1 = ages
    .map(value => (value > 2 ? 16 + value * 4 : value * 2)) //2
    .filter(age => age >= 18)
    .reduce(
      (accumulator, currentValue, i, arr) =>
        accumulator + currentValue / arr.length,
      0
    );
  console.log(average1);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

////////////////////////////////FIND METHOD////////////////////////////

console.log(
  account1.movements.find(function (mov) {
    //returns the first element that satisfies the condition
    return mov < 0;
  })
);
const user = accounts.find(function (acc) {
  return acc.username === 'js';
});
console.log(user.owner);

/////////////////////FIND INDEX//////////////////////
//RETURNS THE INDEX OF THE SEARCHED ITEM
//delete function of bankist
*/
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const closeUse = inputCloseUsername.value;
  console.log(closeUse, currentAccount.username);
  const closePin = Number(inputClosePin.value);
  console.log(closePin);
  if (closeUse === currentAccount.username && closePin === currentAccount.pin) {
    const index = accounts.findIndex(function (acc) {
      return acc.username === closeUse;
    });
    accounts.splice(index, 1); //Where and how many(parameters)
    console.log(index);
    containerApp.style.opacity = 0;
  }
});
////////////////USE SOME METHOD/////////////////
//LOAN FUNCTION

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(function (mov) {
      //whenever i think of the word "any" it translated to some function
      return mov >= (loanAmount * 10) / 100;
    })
  ) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  }
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted); //if it is not sorted(first time it is false, so it sorts when pressed)
  sorted = !sorted; //we flip the value. whatever it is we put the opposite
});
/*
/////////////////////////EVERY METHOD////////////////////////
//RETURNS TRUE IF ALL ELEMENTS ARE TRUE TO THE CONDITION
//console.log(anyDeposits);
console.log(
  accounts[3].movements.every(function (move) {
    return move > 0;
  })
);
/////////////////////flat and flatMap methods///////////////////////
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); //it flattens the array: [1, 2, 3, 4, 5, 6 , 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]; //[Array(2), 3, 4, Array(2), 7, 8] <-- takes out the first level brackets
console.log(arrDeep.flat());

const arrDeep1 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep1.flat(2)); //we go two levels deep

const accountMoves = accounts.map(function (value) {
  return value.movements;
});
const overAllBalance = accountMoves
  .flat()
  .reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
console.log(overAllBalance);

////////////////////////flatMap//////////////
accounts.map(function (value) {
  return value.movements;
});
const overAllBalance2 = accounts
  .map(function (value) {
    return value.movements;
  })
  .flat()
  .reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
console.log(overAllBalance2);

/////////////////////////////The above with flatMap////////////////////
const overAllBalance3 = accounts
  .flatMap(function (value) {
    return value.movements;
  })
  .reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
console.log(overAllBalance3);

//////////////////////////SORTING/////////////////////////////////
//STRINGS
const owners = ['ant', 'popi', 'giannis', 'giorgos'];
console.log(owners.sort()); //SOS : IT MUTATES THE ORIGINAL ARRAY
console.log(owners);
//NUMS
const movs = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
console.log(movs.sort()); //It is not sorted. The reason is because sort converts everything to strings and then compares
//return <0 then a,b ->keep order
//return <0 then b,a ->switch order
//ascending
console.log(
  movs.sort(function (a, b) {
    //a : currentValue , b : nextValue
    return a > b ? 1 : -1;
  })
);
//descending
//opposite sort
console.log(
  movs.sort(function (a, b) {
    //a : currentValue , b : nextValue
    return a > b ? -1 : 1; //IF A IS GREATER THAN B, THEN A - B WILL ALWAYS BE POSITIVE
    //IF A IS LESS THAN B, THEN A - B WILL ALWAYS BE NEGATIVE
  })
);
//SIMPYFIED. WE DONT CARE WHICH NEGATIVE OR POSITIVE
console.log(
  movs.sort(function (a, b) {
    //a : currentValue , b : nextValue
    return a - b; //IF A IS GREATER THAN B, THEN A - B WILL ALWAYS BE POSITIVE
    //IF A IS LESS THAN B, THEN A - B WILL ALWAYS BE NEGATIVE
  })
);
console.log(
  movs.sort(function (a, b) {
    //a : currentValue , b : nextValue
    return b - a; //IF A IS GREATER THAN B, THEN A - B WILL ALWAYS BE POSITIVE
    //IF A IS LESS THAN B, THEN A - B WILL ALWAYS BE NEGATIVE
  })
);

///////////////////////////////////other ways of creating and filling arrays//////////////////////////
const arr1 = new Array(1, 2, 3, 4, 5, 6, 7);
console.log(new Array(7)); //when one parameters is passed, it created an array with this length
console.log(new Array('antonis')); //it created it
//console.log(new Array(0.5));

const arr = new Array(7);
console.log(arr);
arr.fill(1, 3, 5); //mutates the original array. puts 1s from position 3 and onwoards until 5th position
console.log(arr);
arr1.fill(23, 4, 6);
console.log(arr1);

//recreating arr1 programmatically
///////////////////////////////ARRAY.FROM FUNCTION/////////////////////////////
const y = Array.from({ length: 7 }, function () {
  //better than the weird behavior of new Array(7)
  return 1;
}); //we use it on the array constructor
console.log(y);

const z = Array.from({ length: 7 }, function (_curr, i) {
  //_curr throw away variable, because we just need i but we have to  respect the order
  return i + 1;
});
console.log(z);

//WITH FROM WE CAN CREATE ARRAYS FROM OTHER ITERABLES
//TAKE THE MOVEMENTS FROM THE UI
labelBalance.addEventListener('click', function () {
  const movements = Array.from(
    document.querySelectorAll('.movements__value'),
    function (el) {
      return Number(el.textContent.replace('€', ''));
    }
  );
  console.log(movements);
});

///////////////////////////WHICH ARRAY METHOD TO USE/////////////////////////////
//QUESTIONS TO ASK:
To mutate original array,
    -ADD TO ORIGINAL
    ----.push (end)
    ----.unshift (start)
    -REMOVE FROM ORIGINAL
    ----.pop (end)
    ----.shift (start)
    ----.splice(any)
    -OTHERS
    ----.reverse
    ----.sort
    ----.fill

A new array,
    -COMPUTED FROM ORIGINAL
    ----.map(loop)
    -FILTERED USING CONDITION
    ----.filter
    -PORTION OF ORIGINAL
    ----.slice
    -ADDING ORIGINAL TO OTHER
    ----.concat
    -FLATTENING THE ORIGINAL
    ----.flat
    ----.flatMap

An array Index,
    -BASED ON VALUE
    ----.indexOf
    -BASED ON TEST CONDITION
    ----.findIndex

An array element,
   -BASED ON TEST CONDITION
   ----.find

Know if array includes,
    -BASED ON VALUE
    ----.includes
    -BASED ON TEXT CONDITION
    ----.some
    ----.every

a new string,
    -BASED ON SEPARATOR STRING
    ----.joing

to transform value,
    -BASED ON ACCUMULATOR
    ----.reduce

to just loop array
    -BASED ON CALLBACK
    ----.forEach (does not create a new array, just loops over it)

//////////////////////////////////ARRAY METHODS PRACTICE///////////////////////////
//HOW MUCH IS BEEN DEPOSITED IN TOTAL IN THE BANK
const amount = accounts
  .flatMap(function (acc) {
    return acc.movements;
  })
  .filter(function (mov) {
    return mov > 0;
  })
  .reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
console.log(amount);
//HOW MANY DEPOSITS IN THE BANK WITH AT LEAST 1000 DOLLARS
const numOf1KDeps = accounts
  .flatMap(function (acc) {
    return acc.movements;
  })
  .filter(function (value) {
    return value >= 1000;
  })
  .reduce(function (_accumulator, _currentValue, i) {
    return i + 1;
  }, 0);
console.log(numOf1KDeps);
//second way
const numOf1KDeps1 = accounts
  .flatMap(function (acc) {
    return acc.movements;
  })
  .reduce(function (accumulator, currentValue) {
    return currentValue >= 1000 ? accumulator + 1 : accumulator;
  }, 0);
console.log(numOf1KDeps1);

//++operator not
let a = 10;
console.log(a++);
console.log(a); //this happens because ++ returns the previous value
//but
console.log(++a); //works
//so this will work
const numOf1KDeps2 = accounts
  .flatMap(function (acc) {
    return acc.movements;
  })
  .reduce(function (accumulator, currentValue) {
    return currentValue >= 1000 ? ++accumulator : accumulator; //this will not work -> accumulator++
  }, 0);
console.log(numOf1KDeps2);
//reduce can be used instead of a lot of functions learned
const sums = accounts
  .flatMap(function (acc) {
    return acc.movements;
  })
  .reduce(
    function (accumulator, currentValue) {
      //currentValue > 0
        //? (accumulator.deposits += currentValue)
        //: (accumulator.withdrawals += currentValue);
      //return accumulator;
      //the above better
      accumulator[currentValue > 0 ? 'deposits' : 'withdrawals'] +=
        currentValue;
      return accumulator;
    },
    { deposits: 0, withdrawals: 0 } //using non primitive value for the accumulator
  );
console.log(sums);
/////My try of the excercise : function that capitalizes every word in and array with some exceptions
const titleCase = function (str) {
  [...str].reduce(function (accumulator, currentValue) {
    accumulator.slice(-1) === '' || accumulator.slice(-1) === ' '
      ? (accumulator += currentValue.toUpperCase())
      : (accumulator += currentValue.toLowerCase());
    console.log(accumulator);
    return accumulator;
  }, '');
};
//const newstr = titleCase('antonis chouvardas IS a badass');
//console.log(newstr);
///////////////Solution
const convertTitle = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .reduce(function (accumulator, currentValue) {
      !exceptions.includes(currentValue)
        ? (accumulator +=
            currentValue.at(0).toUpperCase() + currentValue.slice(1) + ' ')
        : (accumulator += currentValue + ' ');
      return accumulator;
    }, '');
  return titleCase;
};
console.log(convertTitle('this is a nice title'));
console.log(convertTitle('this is a LONG title but not too long'));
console.log(convertTitle('here is another title with an EXAMPLE'));

//////////////////////////////CODING CHALLENGE 4///////////////////////////////
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//1
const calculateRecommendedFood = function (dogs) {
  dogs.forEach(function (value) {
    value.calculateRecommendedFood = value.weight ** 0.75 * 28;
  });
};
calculateRecommendedFood(dogs);
//2
console.log(dogs);
const findDogOwner = function (owner) {
  console.log(
    dogs.find(function (dog) {
      return dog.owners.includes(owner);
    })
  );
};
findDogOwner('Michael');
//3
const lowHigh = dogs.reduce(
  function (accumulator, dog) {
    if (dog.curFood > dog.calculateRecommendedFood * 1.1) {
      accumulator.eatTooMuch.push(...dog.owners);
    } else if (dog.curFood < dog.calculateRecommendedFood * 0.9) {
      accumulator.eatTooLittle.push(...dog.owners);
    } else {
      accumulator.okAmount.push(...dog.owners);
    }
    return accumulator;
  },
  { eatTooMuch: [], eatTooLittle: [], okAmount: [] }
);
console.log(lowHigh);

//4
//"Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
const str1 = lowHigh.eatTooMuch.join(' and ');
console.log(`${str1}'s dogs eat too much`);
const str2 = lowHigh.eatTooLittle.join(' and ');
console.log(`${str2}'s dogs eat too title`);
console.log(dogs);
const cpDogs = dogs.slice();
console.log(cpDogs);
cpDogs.sort(function (a, b) {
  return a.calculateRecommendedFood - b.calculateRecommendedFood;
});
console.log(cpDogs);
