// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

const user = {
    name: "AliRaza",
    getName: function(): string {
        return this.name;
    }
};

console.log(user.getName());  // output: AliRaza

// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

const user0 = {
   firstName: "Ali",
   lastName: "Raza",
   getFullName: function(): string {
    return `${this.firstName} ${this.lastName}`;
   }
};

console.log(user0.getFullName());   // output Ali Raza

// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

const user1 = {
    name: "Ali",
    greet: function() {
        const nestedFunction = () => {
            console.log(this.name);
            
        }

        nestedFunction();
        
    }
};

user1.greet(); // output Ali

