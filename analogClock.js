//Storing the Elements in their variable: hourHand,minHand and secHand
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');

//Function with the name "setDate"
function setDate(){

    // Get the current time (Date,Hour,Minute and Second)
    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calculate rotation degrees for each clock hand
    const hourDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

//Excute "setDate" with fixed time intervals
setInterval(setDate, 1000);

//Call the function "setDate()"
setDate();

// Get the current time (date, dour, minute and second)
const now = new Date();
const hours = now.getHours();
const mins = now.getMinutes();
const seconds = now.getSeconds();

//Write in the HTML-Document
document.write(`<p>Zeit in Zürich: ${now}</p>`);

//Create "options" object and formatting hour, minute and second.
const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

//Formatting the date for New York
const newYorkTime = new Date().toLocaleString('en-US', options);

//Write in the HTML-Document
document.write(`<p>Aktuelle Zeit in New York: ${newYorkTime}</p>`);

