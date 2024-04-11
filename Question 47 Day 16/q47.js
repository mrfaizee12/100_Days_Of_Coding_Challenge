// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.//
var laptops = [
    { make: 'Apple', model: 'MacBook Pro', year: 2022 },
    { make: 'Dell', model: 'XPS 13', year: 2023 },
    { make: 'HP', model: 'Spectre x360', year: 2024 }
];
var firstLaptop = laptops[0], secondLaptop = laptops[1];
console.log(firstLaptop);
console.log(secondLaptop);
