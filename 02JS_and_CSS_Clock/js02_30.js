const secondPoint = document.querySelector('.clock__second');
const minutePoint = document.querySelector('.clock__minute');
const hourPoint = document.querySelector('.clock__hour');


function setTime() {
    const now = new Date();
    const second = now.getSeconds();
    let secondDegree = second * 6;
    secondPoint.style.transform = `rotate(${secondDegree}deg)`;

    if (second === 0) {
        secondPoint.classList.add('no-transition');
        secondPoint.style.transform = `rotate(0deg)`;
        //1000 is the delay, in this case 1000 miliseconds.
        setTimeout(() => {
            secondPoint.classList.remove('no-transition');
        }, 50)
    }

    console.log(second)
    //分針
    const minute = now.getMinutes();
    const minuteDegree = (minute % 60) * 6;
    minutePoint.style.transform = `rotate(${minuteDegree}deg)`;

    if (minute === 0) {
        minutePoint.classList.add('no-transition');
        minutePoint.style.transform = `rotate(0deg)`;
        //1000 is the delay, in this case 1000 miliseconds.
        setTimeout(() => {
            minutePoint.classList.remove('no-transition');
        }, 50)
    }

    //時針
    const hour = now.getHours();
    const hourDegree = (hour % 12) * 30 + (minute % 60) * 0.5;
    hourPoint.style.transform = `rotate(${hourDegree}deg)`;

    if (hour % 12 === 0) {
        hourPoint.classList.add('no-transition');
        hourPoint.style.transform = `rotate(0deg)`;
        //1000 is the delay, in this case 1000 miliseconds.
        setTimeout(() => {
            hourPoint.classList.remove('no-transition');
        }, 50)
    }
}

setInterval(setTime, 1000)