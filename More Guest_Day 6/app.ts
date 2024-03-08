// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let guestList: string[] = ["Robert", "Romen", "Rolin"];
console.log ("\nNEW LIST OF INVITATION: \n");

for ( let j=0; j < guestList.length; j++){
console.log(`Dear ${guestList[j]}: \n you are invited to dinner! \n`);
}

console.log("Good news! We've found a bigger dinner table, so more space is available. So our new guests are: \n")

guestList.unshift("Cena");
guestList.splice(2, 0, "James");

guestList.push("John");


for ( let i=0; i < guestList.length; i++){
    console.log(`Dear ${guestList[i]}: \n you are invited to dinner! \n`);
}