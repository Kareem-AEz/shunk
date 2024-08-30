'use strict';
confetti();

setTimeout(() => {
  confetti.reset();
}, 1);

let getElement = (className, all = false) => {
  let element = all
    ? document.querySelectorAll(`${className}`)
    : document.querySelector(`${className}`);

  return element || (console.error(`Couldn't find class: ${className}`), null);
};

/*          ----------- declarations -----------          */

const player1 = getElement('.player--1');
const player2 = getElement('.player--2');

const player1Score = getElement('.player--1__main-score');
const player1CurrentScore = getElement('.player--1__current-score');

let player2Score = getElement('.player--2__main-score');
const player2CurrentScore = getElement('.player--2__current-score');

const dice = getElement('.dice');
const message = getElement('.message');
let diceSource = getElement('.dice-src');
const svgPath = 'sprite.svg#dice-';

const buttonAgain = getElement('.btn-again');
const buttonRoll = getElement('.btn-roll');
const buttonShunk = getElement('.btn-shunk');

const maxScore = 100;
let currentScore = 0;
let playerData = [{ score: 0 }, { score: 0 }];

let gameOver = false;
let firstRoll = false;

/*          ----------- util functions -----------          */

//determine which player will start
let randomizeStartingPlayer = () =>
  Math.trunc(Math.random() * playerData.length) + 1;

//dice roll
let rollDice = () => Math.trunc(Math.random() * 6) + 1;

//display dice
let displayDice = index => {
  diceSource.attributes[`xlink:href`].value = `${svgPath}${index}`;
};

//selects the player in turn
let activatePlayerTurn = index => {
  let turn = index === 1 ? player1 : player2;
  let notTurn = index === 1 ? player2 : player1;

  turn.classList.add('player--active');
  notTurn.classList.remove('player--active');

  return turn;
};

//toggles active player between player 1 and 2
let togglePlayerTurn = () =>
  activatePlayerTurn((currentPlayer = currentPlayer === 1 ? 2 : 1));

//updates current player's score
let updatePlayerCurrentScore = (index, score) => {
  let player = index === 1 ? player1CurrentScore : player2CurrentScore;

  player.textContent = score;
};

let updatePlayerScore = (index, score) => {
  index === 1
    ? ((playerData[index - 1].score += score),
      (player1Score.textContent = playerData[index - 1].score))
    : ((playerData[index - 1].score += score),
      (player2Score.textContent = playerData[index - 1].score));
};

let updateMessage = (element, msg, color) => {
  dice.classList.add('hidden');
  element.classList.add('shakeErr');
  element.classList.remove('hidden');
  element.textContent = msg;
  element.style.color = color;
};

let shakeDice = () => {
  dice.classList.add('shakeErr');
  dice.style.animation = 'none';
  requestAnimationFrame(() => {
    dice.style.animation = '';
  });
};

let resetErrAnimation = element => {
  element.style.animation = 'none';
  requestAnimationFrame(() => {
    element.style.animation = '';
  });
};

let shakeErr = (element, msg) => {
  element.classList.add('shakeErr');
  updateMessage(element, msg, '#780000');
  resetErrAnimation(element);
};

let resetMessage = element => {
  element.classList.add('hidden');
  dice.classList.remove('hidden');
};

let resetGame = () => {
  gameOver = false;
  firstRoll = false;
  resetMessage(message);
  playerData[0].score = 0;
  playerData[1].score = 0;
  currentScore = 0;

  player1Score.textContent = playerData[0].score;
  player1CurrentScore.textContent = currentScore;
  player2Score.textContent = playerData[1].score;
  player2CurrentScore.textContent = currentScore;

  updatePlayerCurrentScore(currentPlayer, currentScore);

  currentPlayer = Number(randomizeStartingPlayer());
  activatePlayerTurn(currentPlayer);

  displayDice('');
};

/*          ----------- confetti -----------          */
var count = 368;
var defaults = {
  origin: { y: 0.7 },
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio),
  });
}

function triggerConfetti() {
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

/*          ----------- pre init -----------          */

let currentPlayer = Number(randomizeStartingPlayer());
activatePlayerTurn(currentPlayer);
player1Score.textContent = playerData[0].score;
player1CurrentScore.textContent = currentScore;
player2Score.textContent = playerData[1].score;
player2CurrentScore.textContent = currentScore;

/*          ----------- main -----------          */

buttonRoll.addEventListener('click', function () {
  resetMessage(message);

  if (!gameOver) {
    firstRoll = true;
    let dice = rollDice();
    currentScore += dice;
    displayDice(dice);

    if (dice === 1) {
      currentScore = 0;
      updatePlayerCurrentScore(currentPlayer, currentScore);
      togglePlayerTurn();
    } else {
      updatePlayerCurrentScore(currentPlayer, currentScore);
    }
  } else {
    shakeErr(message, 'Please hit the again button!');
  }
});

buttonShunk.addEventListener('click', function () {
  if (!firstRoll) {
    shakeErr(message, 'Try rolling the dice first!');
    return;
  }

  if (currentScore === 0 && firstRoll) {
    shakeDice();
    return;
  }

  if (!gameOver) {
    updatePlayerScore(currentPlayer, currentScore);

    if (playerData[currentPlayer - 1].score >= maxScore) {
      triggerConfetti();
      updateMessage(message, `player ${currentPlayer} wins`, '#283618');
      gameOver = true;
    } else {
      currentScore = 0;
      updatePlayerCurrentScore(currentPlayer, currentScore);
      togglePlayerTurn();
    }
  } else {
    shakeErr(message, 'Please hit the again button!');
  }
});

buttonAgain.addEventListener('click', function () {
  resetGame();
});
