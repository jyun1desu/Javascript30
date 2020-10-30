const speedControlBar = document.querySelector('.speed');
const currentBar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');
let isDown = false;

function handleSpeed(e) {
    if (!isDown) return;
    const y = e.pageY - this.offsetTop;
    const percentage = y / this.offsetHeight;
    const currentBarHeight = Math.round(percentage * 100) + "%";
    currentBar.style.height = currentBarHeight;

    const min = 0.4;
    const max = 4;
    const playbackRate = min + (max - min) * percentage;
    currentBar.textContent = playbackRate.toFixed(1) + 'x'
    video.playbackRate = playbackRate.toFixed(1)
}

speedControlBar.addEventListener("mousedown", () => isDown = true);
speedControlBar.addEventListener("mouseup", () => isDown = false);
speedControlBar.addEventListener("mouseleave", () => isDown = false);
speedControlBar.addEventListener("mousemove", handleSpeed);