// Question 136: Use console.log() to debug and track the value of a variable inside a loop.

function trackVariableInLoop() {
    // Example array to loop through
    const array = [10, 20, 30, 40, 50];
    
    // Variable to track
    let sum = 0;
    
    // Loop through the array
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        
        // Use console.log to debug and track the value of sum and i
        console.log(`Iteration ${i}: sum = ${sum}`);
    }
}

// Call the function to see the output
trackVariableInLoop();

// Question 137: Implement a try-catch block to handle potential errors in a block of code.

function riskyOperation() {
    // This function might throw an error
    let randomNum = Math.random();
    if (randomNum > 0.5) {
        throw new Error("Random number is greater than 0.5");
    }
    return "Success! Random number is less than or equal to 0.5";
}

function performOperation() {
    try {
        // Attempt to execute the risky operation
        let result = riskyOperation();
        console.log(result);
    } catch (error) {
        // Handle any errors that occur
        if (error instanceof Error) {
            console.error("An error occurred:", error.message);
        } else {
            console.error("An unexpected error occurred");
        }
    } finally {
        // This block executes regardless of the try/catch outcome
        console.log("Operation completed");
    }
}

// Call the function to see the try-catch in action
performOperation();

// Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.

console.log("Before breakpoint");

console.log(
  "This line has a breakpoint set on it in the browser's developer tools"
);
console.log("After breakpoint");
