// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// Original list with mixed types
var mixedItems = ["apple", 5, true, "banana", 10, false, "cherry"];
// New list with only strings
var onlyStrings = mixedItems.filter(function (item) { return typeof item === 'string'; });
console.log(onlyStrings); // Output: ["apple", "banana", "cherry"]
