'use strict';

var number = Math.ceil(Math.random() * 20);
// document.querySelector('.number').textContent = number;

let score = 20;
let highScore = 0;

const changeMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', () => {
  number = Math.ceil(Math.random() * 20);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  changeMessage('Start guessing...');
});

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    changeMessage('No number entered!');
    document.querySelector('.message').style.color = 'red';
  } else if (guess === number) {
    document.querySelector('.message').style.color = '#ffffff';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    changeMessage('Correct Number');
  } else if (guess !== number) {
    document.querySelector('.message').style.color = '#ffffff';
    if (score > 0) {
      score -= 1;
      changeMessage(guess > number ? 'Too High' : 'Too Low');
    } else {
      changeMessage('You lost the Game!');
    }
  }
  document.querySelector('.score').textContent = score;
});

// console.log(guess);
