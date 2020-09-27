const currrentYear = new Date().getFullYear();
const newYear = `1 Jan ${currrentYear + 1}`;

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


function countDown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = formatTime(Math.floor((totalSeconds / 3600) / 24));
    const hours = formatTime(Math.floor(totalSeconds / 3600) % 24);
    const minutes = formatTime(Math.floor(totalSeconds / 60) % 60);
    const seconds = formatTime(Math.floor(totalSeconds) % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}


//initial call
countDown();

setInterval(countDown, 1000);
