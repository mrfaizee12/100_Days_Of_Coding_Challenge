// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

// This function swaps the values of two variables
function swapVariables() {
    let a = 5, 
    b = 10; 
    console.log("Before swaping: a =", a, "b =", b);  // Outputs: 5,10

    let temp = a; // Temporarily stores the value of a
    a = b; 
    b = temp; // Sets b to a's original value stored in temp

    console.log("After swaping: a =", a, "b =", b);  // Outputs: 10,5
}

swapVariables();
