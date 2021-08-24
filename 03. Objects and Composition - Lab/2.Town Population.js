function townPopulation(cityArray){
    let cities = [];

    for (let index = 0; index < cityArray.length; index++) {
        let currentCityInfo = cityArray[index];
     
        let cityDataAsArray = currentCityInfo.split(' <-> ');

        let city = cityDataAsArray[0];
        let population = Number(cityDataAsArray[1]);     

        if (cities.some(x => x.name === city)) {
            let curCity = cities.find(x => x.name == city);

            curCity.population += population;
        }
        else {
            let cityObj = {};

            cityObj.name = city;
            cityObj.population = population;
    
            cities.push(cityObj);
        }
    }

    for (let index = 0; index < cities.length; index++) {
        let city = cities[index];
        
        console.log(`${city.name} : ${city.population}`);
    }
}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);