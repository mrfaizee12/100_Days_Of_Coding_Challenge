// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function multiplyDecimals(num1, num2) {
    var product = num1 * num2;
    return Math.round(product * 100) / 100; // Round to two decimal places
}
// Example usage:
var result = multiplyDecimals(3.5, 2.25);
console.log(result); // Output: 7.88
