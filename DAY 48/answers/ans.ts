// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

const helloWorldPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});

helloWorldPromise.then((message) => {
    console.log(message); // This will log "Hello, World!" after 2 seconds
}).catch((error) => {
    console.error('Error:', error);
});

// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

const myPromise = new Promise<string>((resolve, reject) => {
    const success = true; // Change to false to test rejection
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 2000);
});

myPromise
    .then((message) => {
        console.log(message); // This will log if the promise is resolved
    })
    .catch((error) => {
        console.error('Error:', error); // This will log if the promise is rejected
    });

// Question 144: Explain the use of the Promise.all() method with an example.

const promise1 = new Promise<number>((resolve) => {
    setTimeout(() => resolve(10), 1000);
});

const promise2 = new Promise<number>((resolve) => {
    setTimeout(() => resolve(20), 2000);
});

const promise3 = new Promise<number>((resolve) => {
    setTimeout(() => resolve(30), 3000);
});

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // This will log [10, 20, 30] after 3 seconds
        const total = results.reduce((sum, value) => sum + value, 0);
        console.log('Total:', total); // This will log "Total: 60"
    })
    .catch((error) => {
        console.error('Error:', error); // This will log if any of the promises reject
    });

