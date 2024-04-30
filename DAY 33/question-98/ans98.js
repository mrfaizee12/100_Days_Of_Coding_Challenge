// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysUntilNewYear() {
    // Get the current date and the date for the next New Year
    var currentDate = new Date();
    var nextYear = currentDate.getFullYear() + 1;
    var newYearDate = new Date(nextYear, 0, 1); // January is month 0
    // Calculate the difference in milliseconds between the two dates
    var differenceMs = newYearDate.getTime() - currentDate.getTime();
    // Convert milliseconds to days
    var daysLeft = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    console.log("There are ".concat(daysLeft, " days left until New Year's Day of ").concat(nextYear));
}
// Call the function to see the result
daysUntilNewYear();
