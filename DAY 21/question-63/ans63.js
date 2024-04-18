// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
// Describing a circle using our Shape type
var circle = {
    kind: "circle",
    radius: 8
};
// Describing a rectangle using our Shape type
var rectangle = {
    kind: "rectangle",
    width: 15,
    height: 25
};
// Showing what we described
console.log("Here's the circle:", circle);
console.log("And here's the rectangle:", rectangle);
