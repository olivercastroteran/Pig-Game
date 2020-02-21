// DOM Elements
const newBtn = document.querySelector('.btn-new');
const rollBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold');

// Initialization
let scores, roundScore, activePlayer, gamePlaying;

init();

let lastDice;

// Get a Random Dice val and Display it + current update
const getRandomDice = () => {
  if (gamePlaying) {
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
      roundScore += dice1 + dice2;
      document.querySelector(
        `#current-${activePlayer}`
      ).textContent = roundScore;
    } else {
      // Next Player
      nextPlayer();
    }
  }
};

// Hold Score logic
const holdScore = () => {
  if (gamePlaying) {
    // Add Current Score to Global Score
    scores[activePlayer] += roundScore;

    // Update UI
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];
    const input = document.querySelector('.final-score').value;
    let winningScore;

    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    // Check if Player Won the Game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector(`#name-${activePlayer}`).textContent = 'Winner';

      document.getElementById('dice-1').display = 'none';
      document.getElementById('dice-2').display = 'none';

      document
        .querySelector(`.player-${activePlayer}-panel`)
        .classList.add('winner');
      document
        .querySelector(`.player-${activePlayer}-panel`)
        .classList.remove('active');

      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
};

// Turn Change - Next Player
function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
}

// Event Listeners
newBtn.addEventListener('click', init);
rollBtn.addEventListener('click', getRandomDice);
holdBtn.addEventListener('click', holdScore);

// Init
function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}
