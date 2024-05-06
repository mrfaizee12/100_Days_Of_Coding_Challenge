"use strict";
// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorizeAge(age) {
    if (age < 13) {
        return 'Child';
    }
    else if (age >= 13 && age <= 19) {
        return 'Teenager';
    }
    else {
        return 'Adult';
    }
}
// Example usage:
const personAge = 12;
const ageGroup = categorizeAge(personAge);
console.log(`Person's age group: ${ageGroup}`);
