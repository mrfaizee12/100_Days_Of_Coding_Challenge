// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.//
// Original function
function calculateArea(length, width) {
    return length * width;
}
// Refactored arrow function
var calculateRectangleArea = function (length, width) { return length * width; };
// Example usage of the arrow function
console.log(calculateRectangleArea(6, 9));
