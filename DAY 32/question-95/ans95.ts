// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

function numbersGreaterThanTen(arr: number[]): number[] {
    return arr.filter(num => num > 10);
}

// Example usage:
let numbers: number[] = [5, 10, 15, 20, 25];
let numbersGreaterThanTenArray: number[] = numbersGreaterThanTen(numbers);

console.log(numbersGreaterThanTenArray); // Output: [15, 20, 25]

