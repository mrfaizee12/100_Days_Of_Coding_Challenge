// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

function rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
}

// Example usage:
const diceRollResult: number = rollDice();
console.log("Dice roll result:", diceRollResult);
