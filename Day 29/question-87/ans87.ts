// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

function extractFirstTenCharacters(str: string): string {
    return str.substring(0, 10);
  }
  
  // Example usage:
  const originalString = "This is a long string, and we want to extract the first 10 characters.";
  const extractedSubstring = extractFirstTenCharacters(originalString);
  console.log(extractedSubstring); // Output: "This is a "
  