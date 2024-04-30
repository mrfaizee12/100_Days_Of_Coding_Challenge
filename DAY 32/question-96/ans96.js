"use strict";
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all numbers:", sum); // Output: 15
