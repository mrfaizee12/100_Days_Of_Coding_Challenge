// Question 106: Determine if a given year is a leap year using comparison operators.

function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage:
const yearToCheck: number = 2024;
const isLeap: boolean = isLeapYear(yearToCheck);
if (isLeap) {
    console.log(`${yearToCheck} is a leap year.`);
} else {
    console.log(`${yearToCheck} is not a leap year.`);
}
