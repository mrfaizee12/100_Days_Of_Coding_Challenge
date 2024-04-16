// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

// A way to make a flexible object
function createObjectWithFlexibleKey(key: string, value: string) {
    let flexibleObject: {[key: string]: string} = {};
//     // Setting up a section in the object with a changeable name
    flexibleObject[key] = value;
    return flexibleObject;
}

// // Using the flexible object setup for a user's preference
let userPreference = createObjectWithFlexibleKey("theme", "dark");

// // Showing the user's choice
console.log(userPreference);


