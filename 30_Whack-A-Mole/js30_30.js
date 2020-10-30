const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const timeDisplay = document.querySelector('.timeLeft')
let countdown;
let lastHole;
let timeUp = false;
let score = 0;

function randomDuration(min, max) {
    return Math.round(min + Math.random() * (max - min));
}

function randomHole(holes) {
    const holeIndex = Math.floor(Math.random() * holes.length);
    const hole = holes[holeIndex];
    if (hole === lastHole) {
        return randomHole(holes)
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const duration = randomDuration(300, 1200);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, duration)
}

function bonk(e) {
    if (!e.isTrusted) return;
    score++
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = ((then - Date.now()) / 1000).toFixed(2);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 100)
}

function displayTimeLeft(seconds) {
    const display = `Time Left: ${seconds<10?"0":""}${seconds}s`
    timeDisplay.textContent = display
    if (seconds == 0) {
        timeDisplay.textContent = "Time Up!"
    }
}

function startGame() {
    score = 0
    scoreBoard.textContent = score;
    timeUp = false;
    peep();
    timer(10);
    setTimeout(() => {
        timeUp = true;
    }, 10000);
}

moles.forEach(mole => mole.addEventListener("click", bonk))