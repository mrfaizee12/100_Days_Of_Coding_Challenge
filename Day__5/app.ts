// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.//

let guestArr: string[] =["Faizan", "Feroz", "Faisal"];
let canNotAttend: string ="Faian"

// console.log(canNotAttend + " " "can not attend the dinner.")

let newGuest: string = "Aziz"

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

// console.log(guestArr)

guestArr.map((items) =>
console.log(`Dear ${items}, you are invited to the dinner`)
)

