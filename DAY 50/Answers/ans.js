// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
function delayedMessage() {
    console.log("This message is displayed after 2 seconds");
}
// Execute delayedMessage after a 2-second delay
setTimeout(delayedMessage, 2000);
// eg:#2
setTimeout(function () {
    console.log("This message is displayed after 3 seconds");
}, 3000);
// Question 149: Explain the concept of the event loop in JavaScript with an example.
console.log("Start");
setTimeout(function () {
    console.log("Timeout 1 - 0ms");
}, 0);
setTimeout(function () {
    console.log("Timeout 2 - 100ms");
}, 100);
console.log("End");
// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.
// eg: synchronous
console.log("Start");
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("End");
// eg: asynchronous
console.log("Start");
setTimeout(function () {
    console.log("Delayed message");
}, 2000);
console.log("End");
