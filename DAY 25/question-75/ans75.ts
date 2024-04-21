// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

function compAssignOperators(){
    let x: number = 4;

// Addition
x += 2; // equivalent to x = x + 2
console.log("After addition:", x); // Output: 6

// Subtraction
x -= 3; // equivalent to x = x - 3
console.log("After subtraction:", x); // Output: 3

// Multiplication
x *= 5; // equivalent to x = x * 5
console.log("After multiplication:", x); // Output: 15

// Division
x /= 3; // equivalent to x = x / 3
console.log("After division:", x); // Output: 5

}
compAssignOperators()