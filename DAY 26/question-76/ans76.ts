// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.

function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}
const result = addNumbers(5, 3);
console.log("The result is:", result);