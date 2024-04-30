"use strict";
// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
let words = ["apple", "banana", "orange", "grapes"];
let wordLengths = words.map(word => word.length);
console.log(wordLengths); // Output: [5, 6, 6, 6]
