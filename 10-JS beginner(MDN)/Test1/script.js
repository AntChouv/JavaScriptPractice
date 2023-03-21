/*
let RAND = Math.trunc(Math.random() * 100) + 1;
console.log(RAND);

let quess;
let playing = true;

let prev = document.querySelector(".guesses");
let result = document.querySelector(".lastResult");
let lowHigh = document.querySelector(".lowOrHi");
let btn = document.querySelector(".guessSubmit");
let input = document.querySelector(".guessField");
let title = document.querySelector("label");
const restart = document.createElement("button");
restart.textContent = "Restart";
//console.log(lowHigh);
function init() {
  RAND = Math.trunc(Math.random() * 100) + 1;
  console.log(RAND);
  quess;
  playing = true;
  btn.disabled = false;
  input.disabled = false;
  restart.style.display = "none";
  prev.textContent = "";
  result.style.backgroundColor = "white";
  result.textContent = "";
}
const check = () => {
  if (quess === RAND) {
    playing = false;
    result.style.backgroundColor = "green";
    result.textContent = "Congratulations! You got it right!";
    btn.disabled = true;
    input.disabled = true;
    restart.style.display = "";
    document.body.appendChild(restart);
  } else {
    result.style.backgroundColor = "red";
    result.textContent = "Wrong!";
    if (quess > RAND) {
      return "Last guess was too high";
    } else {
      return "Last guess was too low!";
    }
  }
};

btn.addEventListener("click", function () {
  if (playing) {
    quess = Number(input.value);
    const res = check();
    lowHigh.textContent = res;

    prev.textContent
      ? (prev.textContent += ` ${quess}`)
      : (prev.textContent = `Previous guesses: ${quess}`);
  }
});

restart.addEventListener("click", function () {
  init();
});


//Solution

let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }

  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {//iterates through relutParas element and sets them to ""
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}*/
