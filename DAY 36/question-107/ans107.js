"use strict";
// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDivisibleBy2And3(num) {
    return num % 2 === 0 && num % 3 === 0;
}
// Example usage:
const number = 12;
if (isDivisibleBy2And3(number)) {
    console.log(`${number} is divisible by both 2 and 3.`);
}
else {
    console.log(`${number} is not divisible by both 2 and 3.`);
}
