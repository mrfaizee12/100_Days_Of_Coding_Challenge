"use strict";
// Question 18: Seeing the World: Think of at least five places you’d like to visit.
let contries = ["Turkey", "China", "Farance", "Italy"];
console.log("Original Order:", contries);
console.log("Alphabetical Order:", [...contries].sort());
console.log("Still in Original Order:", contries);
console.log("Reverse Order:", [...contries].reverse());
console.log("Still in Original Order:", contries);
// we have Changed the original Array now
console.log("Original Array Revered:", contries.reverse());
console.log("Back to Original Order:", contries.reverse());
console.log("Sorted in Alphabetical Order:", contries.sort());
// we have Changed again the original Array now
console.log("Original Array Revered Again:", contries.reverse());
