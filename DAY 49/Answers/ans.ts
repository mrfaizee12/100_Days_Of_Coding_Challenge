// Question 145: Create a function that accepts a callback and invokes it with some arguments.

// Define the type for the callback function
type Callback = (arg1: string, arg2: number) => void;

// Function that accepts a callback and invokes it with arguments
function invokeCallback(callback: Callback): void {
    const message = "Hello, World!";
    const count = 42;
    callback(message, count);
}

// Example callback function
const exampleCallback = (arg1: string, arg2: number): void => {
    console.log(`Callback invoked with arg1: ${arg1} and arg2: ${arg2}`);
};

// Invoke the function with the callback
invokeCallback(exampleCallback);

// Question 146: Show an example of a callback function used to filter an array of numbers.

// Define the type for the callback function
type FilterCallback = (value: number) => boolean;

// Example callback function to filter out even numbers
const isOdd: FilterCallback = (value: number): boolean => {
    return value % 2 !== 0;
};

// Function to filter an array using the callback
function filterNumbers(numbers: number[], callback: FilterCallback): number[] {
    return numbers.filter(callback);
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = filterNumbers(numbers, isOdd);

console.log(oddNumbers); // This will log [1, 3, 5, 7, 9]

// Question 147: Explain how to handle errors in a callback pattern.

// Function that uses a callback pattern, including error handling
function fetchData(
    callback: (error: Error | null, data?: string) => void
  ): void {
    // Simulating an error condition
    const error = new Error("Failed to fetch data");
    const data = "Some data";
  
    // Simulate fetching data with a chance of error
    if (Math.random() > 0.5) {
      callback(null, data); // No error, data is fetched successfully
    } else {
      callback(error); // Passes error to the callback
    }
  }
  
  // Using the fetchData function with error handling in the callback
  fetchData((error, data) => {
    if (error) {
      console.error(error.message); // Handles the error
    } else {
      console.log(data); // Processes the data
    }
  });
  // Demonstrates a callback pattern where errors are handled gracefully.