"use strict";
// Question 103: Write a function that returns a random boolean value, true or false.
function getRandomBoolean() {
    return Math.random() < 0.5;
}
// Example usage:
const randomBool = getRandomBoolean();
console.log("Random boolean value:", randomBool);
