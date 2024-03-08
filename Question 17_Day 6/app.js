"use strict";
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let guestList = ["Robert", "Romen", "Rolin"];
console.log("\nNEW LIST OF INVITATION: \n");
for (let j = 0; j < guestList.length; j++) {
    console.log(`Dear ${guestList[j]}: \n you are invited to dinner! \n`);
}
console.log("Good news! We've found a bigger dinner table, so more space is available. So our new guests are: \n");
guestList.unshift("Cena");
guestList.splice(2, 0, "James");
guestList.push("John");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}: \n you are invited to dinner! \n`);
}
console.log(" Unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");
// Using while to remove guests from the array untit only two names remain
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest} I cant invite you to dinner`);
}
console.log("Invitations to the last 2 Guests");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));
// Removing last two Guests from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
