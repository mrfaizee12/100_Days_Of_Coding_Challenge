"use strict";
// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
function convertStringToNumber(str) {
    return parseFloat(str); // Parses the string and returns a floating-point number
}
// Example usage:
const numberString = "123.45";
const numberValue = convertStringToNumber(numberString);
console.log(numberValue); // Output: 123.45
