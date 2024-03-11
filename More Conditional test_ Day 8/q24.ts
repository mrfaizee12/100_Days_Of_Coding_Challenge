// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

let apple ="apple";
let upperCaseApple ="APPLE";
let twenty = 20;
let forty = 40;
let fruits = ["apple", "watermelon", "grapes"];

// testing for equality and inequality with strings

console.log("Is apple is equal to apple?");
console.log(apple == "apple"); //true

console.log("\n apple is not equal to apple?");
console.log(apple != "apple"); //false

// testing using lowerCase function
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLocaleLowerCase() == "apple"); //true

console.log("\n APPLE is not equal to apple after coverting to lowercase?");
console.log(upperCaseApple.toLocaleLowerCase() != "apple"); //false

// Numerical test
console.log("\n Is twenty is equal to fourty?");
console.log(twenty == forty); //false

console.log("\n Is twenty is not equal to forty?");
console.log(twenty != forty);  //true

console.log("\n Twenty is smaller than fourty");
console.log(twenty < forty); //true

console.log("\n Forty is greater than twenty");
console.log(forty > twenty);  //true

console.log("\n Is twenty is greater than or equal to 10?");
console.log(twenty >= 10);  //true

console.log("\n twenty is smaller than or equal to 10");
console.log(twenty <= 10); //false

// testing using "and" & "or" Operators
console.log("\n forty is not equal to twenty and forty is greater than twenty");
console.log(forty != 20 && forty > 20); //true

console.log("\n forty is not equal to twenty and forty is greater than fifty");
console.log(forty != 20 && forty > 50); //false

console.log("\n 40 is greater than 70 OR 40 is equal to 40");
console.log(40 > 70 || 40 == 40);  //true

console.log("\n 40 is greater than 70 OR 40 is not equal to 40");
console.log(40 > 70 || 40 != 40); //false

// test whether an item is in a array
console.log("\n Is grapes include in my Fruits array");
console.log(fruits.includes("grapes")); //true
 
// not include
console.log("\n Is grapes not include in my Fruits array");
console.log(!fruits.includes("grapes"));  //false

