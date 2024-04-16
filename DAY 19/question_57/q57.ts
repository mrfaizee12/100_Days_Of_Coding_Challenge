// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

// List of grades
const grades: number[] = [85, 90, 75, 92, 88];

// Calculate the sum of all grades
const sum: number = grades.reduce((acc, grade) => acc + grade, 0);

// Calculate the average grade
const averageGrade: number = sum / grades.length;

console.log(averageGrade); // Output: 86

