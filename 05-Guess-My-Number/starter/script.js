'use strict';

// Generate Random Number
const ranNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = ranNumber;
console.log(ranNumber, typeof ranNumber);
let score = 20;
let highScore = 0;

// React to Click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess && guess !== 0) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === ranNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    // document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#2c3f';
    document.querySelector('.number').style.width = '25rem'
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
  } else if (guess < ranNumber) {
    document.querySelector('.message').textContent = 'Too Low';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You Lost The Game!';
    }
  } else if (guess > ranNumber) {
    document.querySelector('.message').textContent = 'Too High';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You Lost The Game!';
    }
  }
});

// // Generate Random Number

// const ranNumber = Math.floor(Math.random() * 20 + 1);
// let score = 20;
// console.log(typeof ranNumber, ranNumber);

// // Take input from User

// document.querySelector('.check').addEventListener('click', function () {
//   let userInput = Number(document.querySelector('.guess').value);
//   console.log(typeof userInput, userInput);

//   if (!userInput) {
//     document.querySelector('.message').textContent = 'Wrong Number';
//   } else if (userInput > ranNumber) {
//     document.querySelector('.message').textContent = 'Too High';

//     if (score > 0) {
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.message').textContent = 'You Lost The Game!';
//     }
//   } else if (userInput < ranNumber) {
//     document.querySelector('.message').textContent = 'Too Low';
//     if (score > 0) {
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.message').textContent = 'You Lost The Game!';
//     }
//     document.querySelector('.score').textContent = cScore;
//   } else if (userInput === ranNumber) {
//     document.querySelector('.message').textContent = 'Correct Number';
//     document.querySelector('.highscore').textContent = score;
//   }
// });
