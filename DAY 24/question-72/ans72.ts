// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

// Variables declared outside & inside the block
{
let outsideLet = "I'm outside";
const insideConst = "I'm inside";
    console.log(outsideLet); // Output: I'm inside
    console.log(insideConst); // output I'm also side
}

try {
    console.log(outsidelet); // This will fail
} catch (error) {
    console.log("`OutsideLet` is not accessible outside the block.");
}

try {
    console.log(insideconst); // This will also fail
} catch (error) {
    console.log("`InsideConst` is not accessible outside the block.");
}