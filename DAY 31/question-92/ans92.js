"use strict";
// Question 92: Write a function to remove the last element from an array and return the removed element.
function removeLastElement(arr) {
    return arr.pop();
}
// Example usage:
let numbers = [1, 2, 3, 4, 5];
let removedNumber = removeLastElement(numbers);
console.log("Removed Element:", removedNumber); // Output: 5
console.log("Array After Removal:", numbers); // Output: [1, 2, 3, 4]
