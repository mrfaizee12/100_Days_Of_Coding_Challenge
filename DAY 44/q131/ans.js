"use strict";
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
var per_1 = require("./per");
var personInstance = new per_1.Person('Ali', 22);
console.log(personInstance.greet());
