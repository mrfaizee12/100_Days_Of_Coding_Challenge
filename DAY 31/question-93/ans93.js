"use strict";
// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
let fruits = ["Apple", "Banana", "Orange", "Grapes"];
// Find the index of "Banana"
let bananaIndex = fruits.indexOf("Banana");
// Replace "Banana" with "Mango" if it exists in the array
if (bananaIndex !== -1) {
    fruits[bananaIndex] = "Mango";
}
console.log(fruits); // Output: ["Apple", "Mango", "Orange", "Grapes"]
