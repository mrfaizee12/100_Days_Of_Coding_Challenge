// Question 139: List three reserved words in JavaScript and create a valid use case for each.

// Reserved word: let - used to declare a block-scoped local variable
let count: number = 2;

// Reserved word: if - used to execute a block of code if a specified condition is true
if (count > 0) {
    console.log("Count is greater than 0.");
}

// Reserved word: return - used to exit a function and return a value from that function
function add(a: number, b: number): number {
    return a + b;
}

// Demonstrates valid use cases for the reserved words 'let', 'if', and 'return'.
const result = add(3, 4);
console.log(`The result of adding 3 and 4 is: ${result}`); // Output: The result of adding 3 and 4 is: 7

// Questionn 140: Explain the error that occurs when trying to use a reserved word as a variable name.

// let if = 10; // Error if is a resvered word and cannot be used as a variable name
console.log(`Error if is a resvered word and cannot be used as a variable name`)
let condition = 10; // correct condition is not a resvered word 
console.log(`${condition} correct condition is not a resvered word`);

// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.

async function fetchData(url: string): Promise<any> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

async function main() {
    const apiUrl = 'https://api.example.com/data';
    try {
        const data = await fetchData(apiUrl);
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

main();




