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


const now = new Date();
const hours = now.getHours();
const mins = now.getMinutes();
const seconds = now.getSeconds();

document.write(`<p>Zeit in Zürich: ${now}</p>`);
setInterval(document.write, 1000);


const newYorkTimeZone = 'America/New_York';

// Optionen für das Datumsformat
const options = {
    timeZone: newYorkTimeZone,
    hour12: false, // 24-Stunden-Format
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

// Aktuelle Zeit von New York abrufen und formatieren
const newYorkTime = new Date().toLocaleString('en-US', options);

// Anzeige der Zeit von New York im HTML-Dokument
document.write(`<p>Aktuelle Zeit in New York: ${newYorkTime}</p>`);