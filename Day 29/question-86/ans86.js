"use strict";
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
function checkForJavaScriptPresence(sentence) {
    return sentence.includes("JavaScript");
}
// Example usage:
const sentence1 = "I love JavaScript!";
const sentence2 = "TypeScript is great, but I prefer Python.";
console.log(checkForJavaScriptPresence(sentence1)); // Output: true
console.log(checkForJavaScriptPresence(sentence2)); // Output: false
