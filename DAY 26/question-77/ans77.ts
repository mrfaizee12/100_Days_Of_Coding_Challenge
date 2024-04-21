// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

function greetUser(name: string = "anonymous"): void {
    console.log(`Hello, ${name}!`);
}

// Function calls
greetUser(); // Output: Hello, anonymous!
greetUser("Alice"); // Output: Hello, Alice!
greetUser("Bob"); // Output: Hello, Bob!

