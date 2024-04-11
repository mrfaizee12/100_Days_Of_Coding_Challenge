function create_car(manufacturer, model, ...options){
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;

}

// call a fumction to create a car object
let myCar = create_car("Honda", "Civic", "color: grey", "Sunroof: true", "Year: 2022");

console.log(myCar);