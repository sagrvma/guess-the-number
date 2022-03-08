'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Input!';
  }
  if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('.number').textContent = secretNumber;
  } else {
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Lower...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Higher...';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
