"use strict";
// Question 104: Create a function that generates a random hexadecimal color code.
function generateRandomHexColor() {
    let color = "#";
    const hexDigits = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        color += hexDigits[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Example usage:
const randomHexColor = generateRandomHexColor();
console.log("Random hexadecimal color code:", randomHexColor);
