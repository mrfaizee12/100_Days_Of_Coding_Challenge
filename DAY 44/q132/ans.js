"use strict";
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
var _1st_1 = require("./1st");
var _2nd_1 = require("./2nd");
var result = (0, _1st_1.default)(3, 4);
console.log("The result of add(3,4)is : ".concat(result));
(0, _2nd_1.One)();
(0, _2nd_1.Two)();
