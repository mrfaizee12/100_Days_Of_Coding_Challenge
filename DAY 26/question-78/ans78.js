// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
// Function Declaration
function squareNumberDeclaration(num) {
    return num * num;
}
// Function Expression
var squareNumberExpression = function (num) {
    return num * num;
};
// Function calls
console.log("Function Declaration:");
console.log("Square of 5:", squareNumberDeclaration(5)); // Output: 25
console.log("\nFunction Expression:");
console.log("Square of 5:", squareNumberExpression(5)); // Output: 25
