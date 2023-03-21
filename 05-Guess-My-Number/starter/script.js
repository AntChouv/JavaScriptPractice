'use strict';

console.log(document.querySelector('.message').textContent); //Choose HTML element according to class name
//.textContent reads the content of the element

//DOM MANUPULATION
//Above i interacted with the DOM.Document.Object.Model.(Structured represantation of HTML documanets)
//Allows JS to access HTML elements and styles to manipulate them. Connection between HTML documants
//and JS code. Automatically created by the browser as soon as the HTML page loads. Store in a tree structure.
/*Tree-like represantation of an HTML document. Head(Document)
                                                      |
                                                 Element(html)
                                             |                  |
                                        Element(head)       Element(body)
                                    |                                              |
                              Element(title)                 Element(selection)          Element(selection) 
                                    |                                    |                    |              |
                                Element(text)                         Element(p)         Element(p)      Element(img)

//DOM and DOM method are part of web APIs(libraries,also written in JS, that browsers implement and we can access from our javaScript code)

document.querySelector('.message').textContent = 'Correct Number!'; //Change element content.DOM manipulating
//cause we manipulated the DOM element(<p class="message">Start guessing...</p>)
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); //.value to take value from a input
*/

let RAND = Math.trunc(Math.random() * 20) + 1;
console.log(RAND);

let score = 20; //Better to have variables stored in our code than rely on DOM everytime

let highScore = 0;

const displayMessage = message => {
  //We refactor the function call to making it easier to call. Also it can make the code easier to read without having to look at long line codes
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //Handles the  Check button
  //click is the name of the event, and we pass it a function value
  //as an argument, with instructions what to do.The function is the event handler
  //A function is a value and we can pass it in other functions as an argument
  //The function will only work when it will be called from the EventListener

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('No Number');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === RAND) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = RAND;
    //MANIPULATING CSS
    document.querySelector('body').style.backgroundColor = '#60b347'; //style SOS!!
    document.querySelector('.number').style.width = '30rem'; //Value has to be string

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== RAND) {
    if (score > 1) {
      displayMessage(guess > RAND ? 'To high' : 'To low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  } /*else if (guess > RAND) {//Made it DRYier with the else if above
    if (score > 1) {
      document.querySelector('.message').textContent = 'To high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < RAND) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});
document.querySelector('.again').addEventListener('click', function () {
  //Handles the Again button
  RAND = Math.trunc(Math.random() * 20) + 1;
  console.log(RAND);
  score = 20;
  displayMessage('Start quessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
