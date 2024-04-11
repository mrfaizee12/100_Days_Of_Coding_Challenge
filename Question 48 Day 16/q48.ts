// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

const laptops1 = [1200, 800, 1500];
const laptops2 = [1000, 1300, 900];

const combinedLaptops = [...laptops1, ...laptops2].sort((a, b) => a - b);

console.log(combinedLaptops);