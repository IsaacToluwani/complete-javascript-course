'use strict';

// // Generate Random Number
// const ranNumber = Math.trunc(Math.random() * 21);
// document.querySelector('.number').textContent = ranNumber;
// console.log(ranNumber, typeof ranNumber);

// // React to Click
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number';
//   } else if (guess === ranNumber) {
//     document.querySelector('.message').textContent = 'Correct Number';
//   } else if (guess < ranNumber) {
//     document.querySelector('.message').textContent = 'Too Low';
//   } else if (guess > ranNumber) {
//     document.querySelector('.message').textContent = 'Too High';
//   }
// });

// Generate Random Number

const ranNumber = Math.floor(Math.random() * 20 + 1);
console.log(typeof ranNumber, ranNumber);

// Take input from User

document.querySelector('.check').addEventListener('click', function () {
  let userInput = Number (document.querySelector('.guess').value);
  console.log(typeof userInput, userInput);
  
  if (!userInput) {
    document.querySelector('.message').textContent = 'Wrong Number';
  } else if (userInput === ranNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
  } else if (userInput > ranNumber) {
    document.querySelector('.message').textContent = 'Too High';
    let cScore = (Number (document.querySelector('.score').textContent)) - 1;
    document.querySelector('.score').textContent = cScore;
  } else if (userInput < ranNumber) {
    document.querySelector('.message').textContent = 'Too Low';
    let cScore = (Number (document.querySelector('.score').textContent)) - 1;
    document.querySelector('.score').textContent = cScore;
  }
});

let cScore = (document.querySelector('score').value) - 1;