"use strict";
// Question 32: Checking Usernames: Ensure uniqueness in usernames.
// Array of current users
let current_users = ["John", "Rolin", "Steve", "Romen", "Rock"];
// Array of new users
let new_users = ["Daldon", "Newton", "Steve", "Sachin", "Rolin"];
//loop through new users to check usernames avaibility
new_users.forEach(new_one_user => {
    // making a condition for username aready exist and save in our condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken`);
    }
    else {
        console.log(`This Username ${new_one_user} is available`);
    }
});
