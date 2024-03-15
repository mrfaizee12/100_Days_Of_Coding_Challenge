// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

let age: number = 21;

// Determining the stage of life using if-else chain
if(age < 2){
    console.log("You are a baby.");
}
else if(age >= 2 && age < 4){
    console.log("You are a toddler.");
}
else if(age >= 4 && age < 13){
    console.log("You are a kid.");
}
else if(age >= 13 && age < 20){
    console.log("You are a teenagers.");
}
else if(age >= 20 && age < 65){
    console.log("You are an adults.");
}
else if(age >= 65){
    console.log("You are elders.");
}