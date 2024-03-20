"use strict";
// Question 37: Large Shirts: Default values in make_shirt().
// making a function 
function make_shirt(size = "Large", printMessage = "I love Programming") {
    console.log(`Creating a ${size} shirt with the message ${printMessage} print on shirt`);
}
// Calling a function by default values
make_shirt();
// Calling a function with medium size and by default message
make_shirt("Medium");
// calling a function now with a small size and also different message
make_shirt("Small", "I love Coding");
