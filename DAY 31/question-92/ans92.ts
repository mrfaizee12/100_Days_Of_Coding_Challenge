// Question 92: Write a function to remove the last element from an array and return the removed element.

function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop();
}

// Example usage:
let numbers: number[] = [1, 2, 3, 4, 5];
let removedNumber: number | undefined = removeLastElement(numbers);

console.log("Removed Element:", removedNumber); // Output: 5
console.log("Array After Removal:", numbers); // Output: [1, 2, 3, 4]

