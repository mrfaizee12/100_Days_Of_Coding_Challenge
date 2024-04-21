// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function logObjectProperties(obj: any): void {
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// Example object
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};

// Calling the function with the example object
logObjectProperties(car);
