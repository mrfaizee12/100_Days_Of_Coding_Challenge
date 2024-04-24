// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

function roundToNearestInteger(num: number): number {
    return Math.round(num);
  }
  
  // Example usage:
  const decimalNumber = 3.7;
  const decimalNumber0 = 3.4;
  const roundedNumber = roundToNearestInteger(decimalNumber);
  const roundedNumber0 = roundToNearestInteger(decimalNumber0)
  console.log(roundedNumber); // Output: 4
  console.log(roundedNumber0); // output 3
  
  