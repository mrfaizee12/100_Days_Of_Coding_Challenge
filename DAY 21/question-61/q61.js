// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory[VehicleCategory["Car"] = 0] = "Car";
    VehicleCategory[VehicleCategory["Truck"] = 1] = "Truck";
    VehicleCategory[VehicleCategory["Motorcycle"] = 2] = "Motorcycle";
})(VehicleCategory || (VehicleCategory = {}));
// Example:
var vehicleType = VehicleCategory.Car;
console.log(vehicleType); // Output: 0
