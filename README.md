# Clock App

This is a straightforward clock app that shows the current time and updates the clock hands in real-time. It features aesthetically pleasing clock face styling with interactive effects when hovering over elements.



## JavaScript Explanation

### Storing Elements in Variables

const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');

### Functions

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

This function retrieves the current time (including hours, minutes, and seconds) using the Date object. Then it calculates the rotation degrees for each clock hand and updates their positions accordingly.

## Clock Design

### Outer Clock Face
The clock's outer face features a dynamic background with markings at various angles, contributing to its unique and modern look.

### Inner Clock Face
The inner part of the clock face complements the outer design, creating a harmonious visual experience.

### Clock Hands
Distinctive clock hands for hours, minutes, and seconds enhance the overall aesthetic, ensuring clear time representation.

### Text Styling
The accompanying text is styled with a sophisticated touch, using the Verdana font, bold weights, and subtle borders for emphasis.

### Hover Effects
Hovering over the text elements triggers captivating effects, including background transitions, color changes, and size adjustments, providing an interactive user experience.