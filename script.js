'use strict';
//   when player clicks a option, run a function that chooses a random option from computer.
// compare options and return the winner of the two or a tie if both results are the same.
// there should be a function that solely returns the computers choice.
// the game function should have two parameters for players choice and cpu choice to compare between.
const container = document.getElementById('choices');
let result = document.querySelector('.result');
let roundScore = document.querySelector('.roundScore');
let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
let round = 1;
let playerWins = 0;
let cpuWins = 0;

function computerPlay() {
  let rndmNum = (Math.floor(Math.random() * 3) + 1);
  let choice = '';
  rndmNum === 1 ? choice = 'rock' : rndmNum === 2 ? choice = 'paper' : rndmNum === 3 ? choice = 'scissors' : null;

  return choice;
}

function playRound(playerChoice, computerChoice) {
  if ((playerChoice === 'rock' && computerChoice === 'rock') || (playerChoice === 'paper' && computerChoice ===
      'paper') || (playerChoice === 'scissors' && computerChoice === 'scissors')) {
    return 'Tie Round!';
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    return 'Paper covers Rock! You Lose!';
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return 'Rock smashes Scissors, You Win!';
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    return 'Paper covers Rock, You Win!';
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    return 'Scissors cut Paper, You Lose!';
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    return 'Rock smashes Scissors, You Lose!';
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    return 'Scissors cut Paper, You Win!';
  } else {
    alert('incorrect Input!')
  }
}

function bestOf5(roundResult) {
  if (roundResult.toLowerCase().includes('win')) {
    playerWins++;
    result.textContent = roundResult;
  } else if (roundResult.toLowerCase().includes('lose')) {
    cpuWins++;
    result.textContent = roundResult;
  } else if (roundResult.toLowerCase().includes('tie')) {
    result.textContent = roundResult;
  }
  round++
  playerScore.textContent = playerWins;
  computerScore.textContent = cpuWins;
  roundScore.textContent = round;
  if (round === 6) {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    roundScore.textContent = 1;
  }
  if (round === 6 && playerWins > cpuWins) {
    result.textContent = 'Hooray, Man Beats Machine!';
    round = 1;
    playerWins = 0;
    cpuWins = 0;
  } else if (round === 6 && cpuWins > playerWins) {
    result.textContent = 'Machine Triumphs over Man!';
    round = 1;
    playerWins = 0;
    cpuWins = 0;
  } else if (round === 6 && playerWins === cpuWins) {
    result.textContent = 'Its a Tie!';
    round = 1;
    playerWins = 0;
    cpuWins = 0;
  }
}

function game(event) {
  const target = event.target;
  if (target.tagName != 'BUTTON') return;
  bestOf5(playRound(target.value, computerPlay()));
}

container.addEventListener('click', game);