// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 

 
function addMixedTypes(num1: number, strNum: string): number {
    const parsedNum = parseFloat(strNum);
    return num1 + parsedNum;
}

// Example usage:
const sum = addMixedTypes(5, "3");
console.log(sum); // Output: 8

