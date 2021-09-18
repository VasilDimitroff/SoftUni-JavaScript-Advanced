function calculator(area, vol, coordinates){

    array = JSON.parse(coordinates);

    let newArray = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        let figure = {};
        figure.x = Number(element.x);
        figure.y = Number(element.y);
        figure.z = Number(element.z);

        figure.volume = vol;
        figure.area = area;    

        let objRes = {};
        objRes.area = figure.area();
        objRes.volume = figure.volume();

        newArray.push(objRes);
    }

    return newArray;
};

function area() {
        return Math.abs(this.x * this.y);
    };

function vol() {
        return Math.abs(this.x * this.y * this.z);
};

calculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);