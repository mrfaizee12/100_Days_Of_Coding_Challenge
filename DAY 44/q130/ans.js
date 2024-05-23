"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
var ano_1 = require("./ano");
var sum = (0, ano_1.add)(2, 3);
console.log("Sum: ".concat(sum));
var difference = (0, ano_1.subtract)(5, 3);
console.log("Difference: ".concat(difference));
