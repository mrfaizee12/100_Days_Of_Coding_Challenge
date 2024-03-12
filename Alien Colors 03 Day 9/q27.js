"use strict";
// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
let alienColor = "green";
// 1st version
if (alienColor === "green") {
    console.log("(V1) You shot down green alien you have earned 5 points"); // (V1)
}
else if (alienColor === "yellow") {
    console.log("You shot down yellow alien you have earned 10 points");
}
else if (alienColor === "red") {
    console.log("You shot down red alien you have earned 15 points");
}
// 2nd version
let alienColor0 = "yellow";
if (alienColor0 === "green") {
    console.log("You shot down green alien you have earned 5 points");
}
else if (alienColor0 === "yellow") {
    console.log("(V2) you shot down yellow alien you earned 10 points"); // (V2)
}
else if (alienColor0 === "red") {
    console.log("you down red alien you earned 15 points");
}
// 3rd version
let alienColor01 = "red";
if (alienColor01 === "green") {
    console.log("you shot down green alien you earned 5 points");
}
else if (alienColor01 === "yellow") {
    console.log("you shot down yellow alien you earned 10 points");
}
else if (alienColor01 === "red") {
    console.log("(V3) you shot down red alien you earned 15 points"); //(V3)
}
