// Question # 46
var Laptop = /** @class */ (function () {
    function Laptop(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Laptop.prototype.describe = function () {
        var description = ("This ".concat(this.make, " ").concat(this.model, " was released in ").concat(this.year, "."));
        console.log(description);
    };
    return Laptop;
}());
// Example usage
var myLaptop = new Laptop("Dell", "XPS 13", 2023);
myLaptop.describe();
