// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".//
function mergeStringAndNumber(text, num) {
    return "".concat(text).concat(num);
}
// Example usage:
var mergedText = mergeStringAndNumber("Age: ", 30);
console.log(mergedText); // Output: Age: 30
