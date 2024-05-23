export class Person {
    constructor(private name: string, private age: number) {}

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
