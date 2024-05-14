// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

let count = 10;
while (count >= 1) {
    if (count === 5) {
        break;
    }
    console.log(count);
    count--;
}

// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

const str = "Hello, World!";
for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log(`The first vowel found in the string is "${str[i]}".`);
        break;
    }
}

