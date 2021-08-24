function cityTaxes(city, population, treasury){
    let cityObj = {};

    cityObj.name = city;
    cityObj.population = population;
    cityObj.treasury = treasury;
    cityObj.taxRate = 10;
    cityObj.collectTaxes = function(){
        cityObj.treasury += cityObj.population * cityObj.taxRate;
        Math.floor(cityObj.treasury);
    }
    cityObj.applyGrowth = function(percentage) {
        cityObj.population += cityObj.population * percentage / 100;
        Math.floor(cityObj.population);
    }
    cityObj.applyRecession = function(percentage) {
        cityObj.treasury -= cityObj.treasury * percentage / 100;
        Math.floor(cityObj.treasury);
    }
    
    return cityObj;
}

const city = cityTaxes('Sofia', 2000000, 1000000);
console.log(city.name);
console.log(city.treasury);
console.log(city.population);
console.log(city.taxRate);
