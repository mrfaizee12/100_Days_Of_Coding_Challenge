// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function logObjectProperties(obj) {
    for (var key in obj) {
        console.log("".concat(key, ": ").concat(obj[key]));
    }
}
// Example object
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};
// Calling the function with the example object
logObjectProperties(car);
