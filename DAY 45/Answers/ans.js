// Question 133: Write a JavaScript object and convert it into a JSON string.
var person = {
    name: "Faizan",
    age: 21,
    email: "faizee956@example.com",
    isMember: true,
    hobbies: ["reading", "running", "playing"],
};
var jsonString = JSON.stringify(person);
console.log(jsonString);
// Question 134: Take a JSON string and parse it into a JavaScript object.
// Define a JSON string
var jsonString0 = '{"name": "Ali", "age": 21, "email": "ali@example.com", "isMember": true}';
// Parse the JSON string to a JavaScript object
var person0 = JSON.parse(jsonString0);
// Log the JavaScript object
console.log(person0);
// Question 135: Explain how you can format a JSON string with proper indentation for readability.
var person1 = {
    name: "Raza",
    age: 30,
    email: "raza@example.com",
    isMember: true,
    hobbies: ["reading", "playing", "swimming"],
};
var jsonString1 = JSON.stringify(person1, null, 2);
console.log(jsonString1);
