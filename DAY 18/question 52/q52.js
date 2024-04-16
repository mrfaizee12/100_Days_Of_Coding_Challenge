// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts. //
var my_phone = {
    brand: "Apple",
    model: "iPone 11",
    specs: {
        storage: "128GB",
        screen_size: "6.1 inches",
        battery_life: "24 hours"
    }
};
console.log(my_phone);
var smartphone = {
    brand: "Apple",
    model: "iPhone 13",
    storage: 256,
    screen_size: 6.1,
    battery_life: 20,
    display_details: function () {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Storage:", this.storage, "GB");
        console.log("Screen Size:", this.screen_size, "inches");
        console.log("Battery Life:", this.battery_life, "hours");
    }
};
smartphone.display_details();
