function lowestPricesInCities(citiesInfoArray){

    let products = [];

    for (let index = 0; index < citiesInfoArray.length; index++) {
        let currentCityInfo = citiesInfoArray[index].split(' | ');
        let cityName = currentCityInfo[0];
        let productName = currentCityInfo[1];
        let productPrice = Number(currentCityInfo[2]);

        let product = {
            name: '',
            minPrice: Number.MIN_VALUE,
            cityOfMinPrice: '',
        };

        if (products.some(product => product.name === productName)) {
            product = products.find(product => product.name === productName);

            if (productPrice < product.minPrice) {
                product.minPrice = productPrice;
                product.cityOfMinPrice = cityName;
            }

        } else {
            product.name = productName;
            product.minPrice = productPrice;
            product.cityOfMinPrice = cityName;
            products.push(product);
        }  
    }

    products.forEach(p => console.log(p.name + ' -> ' + p.minPrice + ' (' + p.cityOfMinPrice + ')'));
}

lowestPricesInCities(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000',
]);