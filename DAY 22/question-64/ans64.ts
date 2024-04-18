// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".//

function mergeStringAndNumber(text: string, num: number): string {
    return `${text}${num}`;
}

// Example usage:
const mergedText = mergeStringAndNumber("Age: ", 30);
console.log(mergedText); // Output: Age: 30


