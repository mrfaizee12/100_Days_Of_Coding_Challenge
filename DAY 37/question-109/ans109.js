"use strict";
// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
// const currentTime = new Date();
// const currentHour = currentTime.getHours();
// if (currentHour < 12) {
//     console.log("Good Morning");
// }
// Checks the current hour and logs "Good Morning" if it's before 12 PM
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning"); // It's morning if before 12 PM
}
// This simple check helps us greet users appropriately based on the time of day.
