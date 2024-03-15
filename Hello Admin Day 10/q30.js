"use strict";
// Question 30: Hello Admin: Greet users differently, especially 'admin'.
let userNames = ["Aftab", "Rehan", "Ahmed", "Admin", "Saad"];
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
});
