"use strict";
// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
function isValueNaN(value) {
    return isNaN(value);
}
// Example usage:
console.log(isValueNaN("abc")); // Output: true
console.log(isValueNaN(22)); // Output: false
console.log(isValueNaN(NaN)); // Output: true
