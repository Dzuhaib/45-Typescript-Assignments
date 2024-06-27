"use strict";
function createCar(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const mycar = createCar("Toyota", "Corolla", { color: "black", Year: 2024 });
console.log(mycar);
