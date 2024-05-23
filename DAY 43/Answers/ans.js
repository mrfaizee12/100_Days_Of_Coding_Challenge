// Question 127: Convert a traditional function expression to an arrow function.
var _this = this;
// Traditional function expression
function add(a, b) {
    return a + b;
}
// Arrow function
var add1 = function (a, b) {
    return a - b;
};
// Usage
console.log(add(2, 3)); // Output: 5
console.log(add1(4, 2)); // output: 2
// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
// Arrow function that takes multiple parameters and returns their product
var multiply = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (accumulator, currentValue) { return accumulator * currentValue; }, 1);
};
// Usage example
var result = multiply(2, 3, 4); // Output: 24
console.log(result);
// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
// Demonstrating 'this' in traditional vs. arrow functions
var traditionalVsArrow = {
    value: "42",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: function () {
        console.log("Arrow function:", _this.value);
    },
};
traditionalVsArrow.traditionalFunction(); // output:42
traditionalVsArrow.arrowFunction(); // undefined
