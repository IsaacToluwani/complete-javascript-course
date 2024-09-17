'use strict';

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.guess').value = '26';

// document.querySelector('.score').textContent = 10;

// Generate Random Number
const ranNumber = Math.trunc(Math.random() * 21);
document.querySelector('.number').textContent = ranNumber;
console.log(ranNumber, typeof ranNumber);

// React to Click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
});
