// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.//

function checkBothTrue(value1: boolean, value2: boolean): boolean {
    return value1 && value2;
}

// Example usage:
const result = checkBothTrue(true, false);
console.log(result); // Output: false
