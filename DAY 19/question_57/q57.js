// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
// List of grades
var grades = [85, 90, 75, 92, 88];
// Calculate the sum of all grades
var sum = grades.reduce(function (acc, grade) { return acc + grade; }, 0);
// Calculate the average grade
var averageGrade = sum / grades.length;
console.log(averageGrade); // Output: 86
