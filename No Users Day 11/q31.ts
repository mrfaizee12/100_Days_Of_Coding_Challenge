// Question 31: No Users: Ensure your user list isn’t empty.

let userNames: string[] =["Aftab", "Faisal", "Ali", "Admin", "Irfan"];

userNames = []

if(userNames.length === 0){
    console.log("Your Array is empty we need to find some users!");
}else{
    // using forEach loop on Array
     
    userNames.forEach(oneUser =>{
    if(oneUser ==="Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
}