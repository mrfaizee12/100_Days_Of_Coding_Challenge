// Question # 46

class Laptop {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    describe(): void {
        let description: string = (`This ${this.make} ${this.model} was released in ${this.year}.`);
        console.log(description);
    }
}

// Example usage
let myLaptop = new Laptop("Dell", "XPS 13", 2023);
myLaptop.describe();


