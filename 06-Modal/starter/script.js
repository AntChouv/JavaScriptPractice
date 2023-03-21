'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal'); //If we want all element of class .show-modal
//console.log(btnShowModal);

//In order to write DRY code

const addClass = function () {
  //hides the modal
  modal.classList.add('hidden'); //Adds the class.
  overlay.classList.add('hidden');
};
const removeClass = function () {
  modal.classList.remove('hidden'); //removes the class.
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', removeClass);
/*
//Removing and adding classes is the proper way of manipulating css. We can manipulate multiple elements at once.
//To hide the modal
btnCloseModal.addEventListener('click', function () {
  //Best way to manipulate css
  modal.classList.add('hidden'); //Adds the class.
  overlay.classList.add('hidden');
});
//To hide the overlay
overlay.addEventListener('click', function () {
  //Best way to manipulate css
  modal.classList.add('hidden'); //Adds the class.
  overlay.classList.add('hidden');
});
*/
//To hide the modal
btnCloseModal.addEventListener('click', addClass);
//To hide the overlay
overlay.addEventListener('click', addClass);
//eventListener listen to events happening in general in al over the document
document.addEventListener('keydown', function (event) {
  //The function JS calls it when key event happens
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) addClass(); //if hidden is not on the list. So it is visible. We can addClass
  //to add the hidden class to the modal so it disappears
});
