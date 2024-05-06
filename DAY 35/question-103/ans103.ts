// Question 103: Write a function that returns a random boolean value, true or false.

function getRandomBoolean(): boolean {
    return Math.random() < 0.5;
}

// Example usage:
const randomBool: boolean = getRandomBoolean();
console.log("Random boolean value:", randomBool);