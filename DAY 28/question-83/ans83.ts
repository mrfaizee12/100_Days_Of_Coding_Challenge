// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

function convertToUpperCaseAndLowerCase(str: string): void {
    const upperCaseStr = str.toUpperCase();
    const lowerCaseStr = upperCaseStr.toLowerCase();
    console.log("Uppercase:", upperCaseStr);
    console.log("Lowercase:", lowerCaseStr);
  }
  
  // Example usage:
  convertToUpperCaseAndLowerCase("Mr Faizee");
  
  