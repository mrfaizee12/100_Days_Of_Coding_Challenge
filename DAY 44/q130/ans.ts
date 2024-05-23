// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

import { add, subtract } from './ano';

const sum = add(2, 3);
console.log(`Sum: ${sum}`);

const difference = subtract(5, 3);
console.log(`Difference: ${difference}`);


