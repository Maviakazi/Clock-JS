const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setSeconds() {
    const seconds = new Date().getSeconds();
    const secondDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    const minutes = new Date().getMinutes();
    const minuteDegrees = (minutes / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    const hours = new Date().getHours();
    const hourDegrees = (hours / 60) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setSeconds, 1000);

setDate();
