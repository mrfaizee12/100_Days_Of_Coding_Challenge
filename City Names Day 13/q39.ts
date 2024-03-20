// Question 39: City Names: Formatting city-country pairs.

function cityCountry (city: string, country: string): string {
    return `${city}, ${country}`
}

let cc1 = cityCountry("Karachi", "Pakistan");
let cc2 = cityCountry("London", "England");
let cc3 = cityCountry("Rome", "Italy");

console.log(cc1);
console.log(cc2);
console.log(cc3);