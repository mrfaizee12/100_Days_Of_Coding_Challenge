// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

function daysUntilNewYear() {
    // Get the current date and the date for the next New Year
    const currentDate = new Date();
    const nextYear = currentDate.getFullYear() + 1;
    const newYearDate = new Date(nextYear, 0, 1); // January is month 0
  
    // Calculate the difference in milliseconds between the two dates
    const differenceMs = newYearDate.getTime() - currentDate.getTime();
  
    // Convert milliseconds to days
    const daysLeft = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
  
    console.log(`There are ${daysLeft} days left until New Year's Day of ${nextYear}`);
  }
  
  // Call the function to see the result
  daysUntilNewYear();
  
  