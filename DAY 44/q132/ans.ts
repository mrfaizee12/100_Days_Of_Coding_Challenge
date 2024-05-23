// Question 132: Discuss the difference between default and named exports in JavaScript modules.

import add from './1st';
import { One, Two } from './2nd';

const result = add(3,4);
console.log(`The result of add(3,4)is : ${result}`);

One();
Two();
