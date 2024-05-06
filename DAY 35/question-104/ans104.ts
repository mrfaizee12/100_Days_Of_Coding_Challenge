// Question 104: Create a function that generates a random hexadecimal color code.

function generateRandomHexColor(): string {
    let color: string = "#";
    const hexDigits: string = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        color += hexDigits[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Example usage:
const randomHexColor: string = generateRandomHexColor();
console.log("Random hexadecimal color code:", randomHexColor);

