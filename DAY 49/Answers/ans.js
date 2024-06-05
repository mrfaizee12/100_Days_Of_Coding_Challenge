// Question 145: Create a function that accepts a callback and invokes it with some arguments.
// Function that accepts a callback and invokes it with arguments
function invokeCallback(callback) {
    var message = "Hello, World!";
    var count = 42;
    callback(message, count);
}
// Example callback function
var exampleCallback = function (arg1, arg2) {
    console.log("Callback invoked with arg1: ".concat(arg1, " and arg2: ").concat(arg2));
};
// Invoke the function with the callback
invokeCallback(exampleCallback);
// Example callback function to filter out even numbers
var isOdd = function (value) {
    return value % 2 !== 0;
};
// Function to filter an array using the callback
function filterNumbers(numbers, callback) {
    return numbers.filter(callback);
}
// Example usage
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = filterNumbers(numbers, isOdd);
console.log(oddNumbers); // This will log [1, 3, 5, 7, 9]
// Question 147: Explain how to handle errors in a callback pattern.
// Function that uses a callback pattern, including error handling
function fetchData(callback) {
    // Simulating an error condition
    var error = new Error("Failed to fetch data");
    var data = "Some data";
    // Simulate fetching data with a chance of error
    if (Math.random() > 0.5) {
        callback(null, data); // No error, data is fetched successfully
    }
    else {
        callback(error); // Passes error to the callback
    }
}
// Using the fetchData function with error handling in the callback
fetchData(function (error, data) {
    if (error) {
        console.error(error.message); // Handles the error
    }
    else {
        console.log(data); // Processes the data
    }
});
// Demonstrates a callback pattern where errors are handled gracefully.
