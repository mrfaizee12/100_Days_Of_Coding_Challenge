"use strict";
// Question 41: Magicians: Display magician names from an array.
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
let magician = ["Ahmed", "Raza", "Jawad"];
show_magicians(magician);
