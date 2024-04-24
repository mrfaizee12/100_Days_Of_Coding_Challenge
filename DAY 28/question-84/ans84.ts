// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
  }
  
  // Example usage:
  const originalSentence = "JavaScript is a papular programming language. I love JavaScript!";
  const modifiedSentence = replaceJavaScriptWithTypeScript(originalSentence);
  console.log(modifiedSentence);
  
  