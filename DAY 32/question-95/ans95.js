"use strict";
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function numbersGreaterThanTen(arr) {
    return arr.filter(num => num > 10);
}
// Example usage:
let numbers = [5, 10, 15, 20, 25];
let numbersGreaterThanTenArray = numbersGreaterThanTen(numbers);
console.log(numbersGreaterThanTenArray); // Output: [15, 20, 25]
