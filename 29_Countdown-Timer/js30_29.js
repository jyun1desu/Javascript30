let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')
const timeEnterForm = document.customForm

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000
    displayTimeLeft(seconds);
    displayEndName(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    const hours = Math.floor(seconds/3600);
    remainderseconds = seconds%3600;
    const minutes = Math.floor(remainderseconds/60);
    remainderseconds = remainderseconds%60;
    // const display = `${days}day${days>1?"s":""} ${hours}hour${hours>1?"s":""} ${minutes<10?"0":""}${minutes}:${remainderseconds<10?"0":""}${remainderseconds}`
    const display = `${hours<10?"0":""}${hours}:${minutes<10?"0":""}${minutes}:${remainderseconds<10?"0":""}${remainderseconds}`
    timerDisplay.textContent = display
    console.log(display,seconds)
}

function displayEndName(timeStamp){
    const end = new Date(timeStamp);
    const date = end.getDate();
    const hour = end.getHours();
    const minute = end.getMinutes();
    const second = end.getSeconds();
    endTimeDisplay.textContent = `到期時間：${hour>12?"PM":"AM"}${hour>12?hour-12:hour}:${minute<10?"0":""}${minute}`
}

function startTimer(){
    const seconds = Number(this.dataset.time);
    timer(seconds);
}

function customTimeSet(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins*60);
    this.reset();
}

buttons.forEach(button=>button.addEventListener("click",startTimer))
timeEnterForm.addEventListener("submit",customTimeSet)