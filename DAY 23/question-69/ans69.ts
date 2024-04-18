// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

function divideAndGetRemainder(dividend: number, divisor: number): { quotient: number, remainder: number } {
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    return { quotient, remainder };
}

// Example usage:
const result = divideAndGetRemainder(10, 3);
console.log(result); // Output: { quotient: 3, remainder: 1 }

