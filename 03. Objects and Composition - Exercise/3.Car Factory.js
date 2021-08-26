function carFactory(carInfo){

    let car = {};
    car.model = carInfo.model;

    let enginePower = carInfo.power;
    let volume = 0;

    if (enginePower > 0 && enginePower <= 90) {
        volume = 1800;
        enginePower = 90;
    }
    else if (enginePower > 90 && enginePower <= 120) {
        volume = 2400;
        enginePower = 120;
    }
    else if (enginePower > 120 && enginePower <= 200) {
        volume = 3500;
        enginePower = 200;
    }

    car.engine = {
        power: enginePower,
        volume: volume,
    };

    car.carriage = {
        type: carInfo.carriage,
        color: carInfo.color,
    };

    if (carInfo.wheelsize % 2 === 0) {
        carInfo.wheelsize = 2* Math.floor(carInfo.wheelsize/2) - 1;
    }

    car.wheels = [];

    for (let index = 1; index < 5; index++) {
        car.wheels.push(carInfo.wheelsize);
    }

    return car;
}

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });