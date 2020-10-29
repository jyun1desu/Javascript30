const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
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
        console.log("ohh~~~")
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

function startGame() {
    score = 0
    scoreBoard.textContent = score;
    timeUp = false;
    peep();
    setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
    if (!e.isTrusted) return;
    score++ 
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener("click", bonk))