"use strict";
// Question 106: Determine if a given year is a leap year using comparison operators.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
// Example usage:
const yearToCheck = 2024;
const isLeap = isLeapYear(yearToCheck);
if (isLeap) {
    console.log(`${yearToCheck} is a leap year.`);
}
else {
    console.log(`${yearToCheck} is not a leap year.`);
}
