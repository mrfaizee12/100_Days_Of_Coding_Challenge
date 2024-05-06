// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

function areStringsEqualIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}

// Example usage:
const string1 = "Hello";
const string2 = "hello";
console.log(areStringsEqualIgnoreCase(string1, string2)); // Output: true
