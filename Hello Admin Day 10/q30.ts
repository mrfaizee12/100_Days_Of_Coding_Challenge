// Question 30: Hello Admin: Greet users differently, especially 'admin'.

let userNames: string[] = ["Aftab", "Rehan", "Ahmed", "Admin", "Saad"];

// using forEach loop on Array
userNames.forEach(oneUser =>{
    if(oneUser ==="Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})