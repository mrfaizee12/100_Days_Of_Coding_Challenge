function show_magicians(magicians: string[]){
  for (let magician of magicians){
      console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}

function make_great(magicians: string[]): string[] {
  let modifiedMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
    modifiedMagicians.push(magicians[i] + " the great");
  }
  return modifiedMagicians;
}

let magicians0 = ["Ahmed", "Raza", "Jawad"];
let copyMagicians = magicians0.slice();
let copy_great_magicians: string[] = make_great(copyMagicians);

//original
console.log("Original Array\n")
show_magicians(magicians0);
//copy
console.log("\n Copy Array\n")
show_magicians(copy_great_magicians);

