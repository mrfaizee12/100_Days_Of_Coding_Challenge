// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
var x = 10;
console.log(x); // Output: 10
x = 20; // Reassigning value to x
console.log(x); // Output: 20
var y = 5;
console.log(y); // Output: 5
// Attempting to reassign value to y will result in an error
try {
    y = 8; // Trying to reassign a const variable
}
catch (error) {
    console.error(error); // Output: TypeError: Assignment to constant variable.
}
