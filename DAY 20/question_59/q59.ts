// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function addSpecialNumber(baseNumber: number, specialNumber: number): number {
    return baseNumber + specialNumber;
}

// Example usage
let baseNumber: number = 10;
let specialNumber: number = 5;
let result: number = addSpecialNumber(baseNumber, specialNumber);
console.log(result); // Output: 15 (10 + 5)


