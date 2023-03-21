'use strict';

// MY TRY
/*
let rand = 0;
let total1 = 0;
let total2 = 0;
let currrentScore1 = 0;
let currrentScore2 = 0;
let current = 0;//player 0 turn

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');

diceEl.classList.add('hidden');//Hide dice

document.querySelector('.btn--roll').addEventListener('click', function () {
  rand = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');//show dice
  diceEl.src = `dice-${rand}.png`;
  if (rand !== 1) {
    if (current === 0) {
      currrentScore1 += rand;
      document.querySelector('#current--0').textContent = currrentScore1;
    } else {
      currrentScore2 += rand;
      document.querySelector('#current--1').textContent = currrentScore2;
    }
  } else {
    if (current === 0) {
      current = 1;
      document.querySelector('#current--0').textContent = currrentScore1;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else {
      current = 0;
      document.querySelector('#current--1').textContent = currrentScore2;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (current === 0) {
    document.querySelector('#current--1').textContent = 0;
    total1 += currrentScore1;
    document.querySelector('#score--0').textContent = total1;
    current = 1;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    currrentScore1 = 0;
  } else {
    document.querySelector('#current--0').textContent = 0;
    total2 += currrentScore2;
    document.querySelector('#score--1').textContent = total2;
    current = 0;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    currrentScore2 = 0;
  }
});
*/

//SOLUTION

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //Another way of accesing an element. It is supposed to be a bit faster
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

let scores; //We do the declaration of the variables outside, without starting values.
let currentScore;
let activePlayer;
let playing;

const init = function () {
  //the variables cannot be initialized inside of a function if we want to use the globally
  //they are scoped to the function if we initialize them inside the function
  score0El.textContent = 0;
  score1El.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  //Switch player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //Switches from 0 to 1
  player0El.classList.toggle('player--active'); //Toggle adds the class if it is not there
  player1El.classList.toggle('player--active'); // and removes it if it is there.
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate rand dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; //We dont want it global cause its a new number each time
    //Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; //Change the src attribute in img tag in HTML file to load every time the correct image
    //Check dice
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active players score
    scores[activePlayer] += currentScore; //activePlayer 0 or 1
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Check if score is >= 100
    if (scores[activePlayer] >= 20) {
      //Finish game
      playing = false;
      diceEl.classList.add('hidden');
      //When using query selector we need a selector (.,#)
      //which getElementById we dont need selector
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
