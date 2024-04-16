// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
// Original list of numbers
var originalNumbers = [1, 2, 3, 4, 5];
// New list where each number is twice its original value
var doubledNumbers = originalNumbers.map(function (num) { return num * 2; });
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
