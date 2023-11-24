const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;
}
setInterval(setDate, 1000);

setDate();