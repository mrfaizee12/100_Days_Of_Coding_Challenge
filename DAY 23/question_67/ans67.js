// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
function addMixedTypes(num1, strNum) {
    var parsedNum = parseFloat(strNum);
    return num1 + parsedNum;
}
// Example usage:
var sum = addMixedTypes(5, "3");
console.log(sum); // Output: 8
