// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

function findCodePosition(sentence: string): number {
    return sentence.indexOf("code");
  }
  
  // Example usage:
  const position = findCodePosition("This is a code example");
  console.log(position); // Output: 10 (index where "code" starts)

  
  