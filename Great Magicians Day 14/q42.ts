// Question 42: Great Magicians: Add "the Great" to magician names.

// Question 41: Magicians: Display magician names from an array.

function show_magicians(magicians: string[]){
    for (let magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

// let magician: string[] = ["Ahmed", "Raza", "Jawad"];
// show_magicians(magician) 

// task 42 Answer
function make_great(magicians: string[]){
    for ( let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i]   +   " the great"
    }
}

let magicians0: string[] = ["Ahmed", "Raza", "Jawad"];
make_great(magicians0);
show_magicians(magicians0);