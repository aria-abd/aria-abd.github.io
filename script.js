'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;

// let scores = [0, 0];
// let currenStore = 0;
// let activePlayer = 0;
// let playing = true;

let scores, currenStore, activePlayer, playing;

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');

const init = () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  scores = [0, 0];
  currenStore = 0;
  activePlayer = 0;
  playing = true;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();
const changeActive = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currenStore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// let activeImg = ['dice-1', 'dice-2', 'dice-3', 'dice-4', 'dice-5', 'dice-6'];

roll.addEventListener('click', () => {
  if (playing) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.setAttribute('src', `dice-${randomNumber}.png`);

    if (randomNumber !== 1) {
      // currenStore = currenStore + randomNumber;
      currenStore += randomNumber;

      document.getElementById(`current--${activePlayer}`).textContent =
        currenStore;
    } else {
      changeActive();
    }
  }
});

hold.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currenStore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (document.getElementById(`score--${activePlayer}`).textContent >= 80) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      changeActive();
    }
  }
});

newGame.addEventListener('click', init);
