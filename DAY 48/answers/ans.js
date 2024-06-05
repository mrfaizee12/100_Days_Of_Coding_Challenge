// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
var helloWorldPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 2000);
});
helloWorldPromise.then(function (message) {
    console.log(message); // This will log "Hello, World!" after 2 seconds
}).catch(function (error) {
    console.error('Error:', error);
});
// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
var myPromise = new Promise(function (resolve, reject) {
    var success = true; // Change to false to test rejection
    setTimeout(function () {
        if (success) {
            resolve("Promise resolved successfully!");
        }
        else {
            reject("Promise rejected!");
        }
    }, 2000);
});
myPromise
    .then(function (message) {
    console.log(message); // This will log if the promise is resolved
})
    .catch(function (error) {
    console.error('Error:', error); // This will log if the promise is rejected
});
// Question 144: Explain the use of the Promise.all() method with an example.
var promise1 = new Promise(function (resolve) {
    setTimeout(function () { return resolve(10); }, 1000);
});
var promise2 = new Promise(function (resolve) {
    setTimeout(function () { return resolve(20); }, 2000);
});
var promise3 = new Promise(function (resolve) {
    setTimeout(function () { return resolve(30); }, 3000);
});
Promise.all([promise1, promise2, promise3])
    .then(function (results) {
    console.log(results); // This will log [10, 20, 30] after 3 seconds
    var total = results.reduce(function (sum, value) { return sum + value; }, 0);
    console.log('Total:', total); // This will log "Total: 60"
})
    .catch(function (error) {
    console.error('Error:', error); // This will log if any of the promises reject
});
