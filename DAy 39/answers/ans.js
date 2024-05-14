"use strict";
// Question 115: Use a switch statement to log the days of the week based on a number (1-7).
function logDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number. Please provide a number between 1 and 7.");
    }
}
// Example usage:
logDayOfWeek(3); // Output: Wednesday
logDayOfWeek(6); // Output: Saturday
logDayOfWeek(8); // Output: Invalid day number. Please provide a number between 1 and 7.
// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
function getSeason(month) {
    let season;
    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Autumn";
            break;
        default:
            season = "Invalid month";
    }
    return season;
}
// Example usage:
console.log(getSeason(1)); // Output: Winter
console.log(getSeason(4)); // Output: Spring
console.log(getSeason(8)); // Output: Summer
console.log(getSeason(11)); // Output: Autumn
console.log(getSeason(13)); // Output: Invalid month
// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function evaluateExpression(expression) {
    switch (expression) {
        case "add":
            console.log("Addition operation selected.");
            break;
        case "subtract":
            console.log("Subtraction operation selected.");
            break;
        case "multiply":
            console.log("Multiplication operation selected.");
            break;
        case "divide":
            console.log("Division operation selected.");
            break;
        default:
            console.log("Invalid operation selected.");
    }
}
// Example usage:
evaluateExpression("add"); // Output: Addition operation selected.
evaluateExpression("subtract"); // Output: Subtraction operation selected.
evaluateExpression("power"); // Output: Invalid operation selected.
