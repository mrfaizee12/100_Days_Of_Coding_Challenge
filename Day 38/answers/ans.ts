// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

// Create a Map
let countryCapitalMap: Map<string, string> = new Map();

// Add countries and their capitals
countryCapitalMap.set("USA", "Washington D.C.");
countryCapitalMap.set("France", "Paris");
countryCapitalMap.set("Japan", "Tokyo");

// Iterate over the Map entries and log them
countryCapitalMap.forEach((capital, country) => {
    console.log(`Capital of ${country}: ${capital}`);
});

// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

function checkForCanadaCapital(map: Map<string, string>): void {
    if (map.has("Canada")) {
        const capital = map.get("Canada");
        console.log(`The capital of Canada is ${capital}`);
    } else {
        console.log("Canada is not in the map.");
    }
}
checkForCanadaCapital(countryCapitalMap)

// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

// Assuming your map is named 'studentMap'
const studentMap: Map<number, string> = new Map([
    [1, "Ali"],
    [2, "Raza"],
    [3, "Danish"]
]);

// Using forEach method
studentMap.forEach((value, key) => {
    console.log(`Student ID: ${key}, Name: ${value}`);
});

// Using for...of loop
// for (const [key, value] of studentMap) {
//     console.log(`Student ID: ${key}, Name: ${value}`);
// }



