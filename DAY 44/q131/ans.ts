// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

import { Person } from './per';

const personInstance = new Person('Ali', 22);
console.log(personInstance.greet());