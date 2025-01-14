const secHand = document.querySelector('.sec');
const minHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');   



function setDate() {
const now = new Date();

const seconds = now.getSeconds();
const secondsDegrees = ((seconds / 60) * 360) + 90;
secHand.style.transform = `rotate(${secondsDegrees}deg)`;

const min = now.getMinutes();
const minsDegrees = ((min / 60) * 360) + ((seconds/60)*6) + 90;
minHand.style.transform = `rotate(${minsDegrees}deg)`;

const hour = now.getHours();
const hoursDegrees = ((hour / 12) * 360) + ((min/60)*30) + 90;
hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();