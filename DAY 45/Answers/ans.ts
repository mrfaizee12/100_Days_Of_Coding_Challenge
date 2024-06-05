// Question 133: Write a JavaScript object and convert it into a JSON string.

const person= {
    name: "Faizan",
    age: 21,
    email: "faizee956@example.com",
    isMember: true,
    hobbies: ["reading", "running", "playing"],
  };

  const jsonString: string = JSON.stringify(person);
  console.log(jsonString);

  // Question 134: Take a JSON string and parse it into a JavaScript object.

  // Define a JSON string
const jsonString0: string = '{"name": "Ali", "age": 21, "email": "ali@example.com", "isMember": true}';

// Parse the JSON string to a JavaScript object
const person0 = JSON.parse(jsonString0);

// Log the JavaScript object
console.log(person0);


// Question 135: Explain how you can format a JSON string with proper indentation for readability.


  const person1 = {
    name: "Raza",
    age: 30,
    email: "raza@example.com",
    isMember: true,
    hobbies: ["reading", "playing", "swimming"],
   
  };
  
  const jsonString1: string = JSON.stringify(person1, null, 2);
  console.log(jsonString1);
  