// DOM Elements
const newBtn = document.querySelector('.btn-new');
const rollBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold');

// Initialization
let scores, roundScore, activePlayer, gamePlaying;

init();

let lastDice;

// Get a Random Dice val
const getRandomDice = () => {
  // 1. Get Random Number
  const dice1 = Math.floor(Math.random() * 6 + 1);
  const dice2 = Math.floor(Math.random() * 6 + 1);

  // 2. Display Dices
  document.getElementById('dice-1').style.display = 'block';
  document.getElementById('dice-2').style.display = 'block';

  document.getElementById('dice-1').src = `./img/dices/dice-${dice1}.png`;
  document.getElementById('dice-2').src = `./img/dices/dice-${dice2}.png`;

  // 3. Update the Roun Score If there was NOT a 1
  if (dice1 !== 1 && dice2 !== 1) {
    // Add Score
  }
};

// Event Listeners
rollBtn.addEventListener('click', getRandomDice);

// Init
function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
}
