function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing")
};

function removeTrainsition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
};

window.addEventListener("keydown", playSound);
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(keys => keys.addEventListener("transitionend", removeTrainsition));