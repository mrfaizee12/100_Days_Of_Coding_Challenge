"use strict";
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function assignGrade(score) {
    if (score >= 80) {
        return 'A';
    }
    else if (score >= 70) {
        return 'B';
    }
    else if (score >= 60) {
        return 'C';
    }
    else if (score >= 50) {
        return 'D';
    }
    else {
        return 'F';
    }
}
// Example usage:
const studentScore = 85;
const studentGrade = assignGrade(studentScore);
console.log(`Student grade: ${studentGrade}`);
