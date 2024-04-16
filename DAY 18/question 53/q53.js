// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.//
var programmerSkills = [
    ["Python", "Java", "C++"],
    ["Git", "Docker", "VS Code"],
    ["Django", "Spring", "React"]
];
// Retrieving three specific skills
var skill1 = programmerSkills[0][0]; // First language
var skill2 = programmerSkills[1][1]; // Second tool
var skill3 = programmerSkills[2][2]; // Third framework
console.log("Three specific skills:");
console.log("1. ", skill1);
console.log("2. ", skill2);
console.log("3. ", skill3);
