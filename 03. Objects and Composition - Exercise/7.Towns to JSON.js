function townsToJSON(array){

    towns = [];

    for (let index = 1; index < array.length; index++) {
        let townInfoRaw = array[index].split('|');
        
        for (let j = 0; j < townInfoRaw.length; j++) {
            townInfoRaw[j] = townInfoRaw[j].trim();           
        } 

        let townInfoClear = townInfoRaw.filter(t => t !== '');

        let townName = townInfoClear[0];
        let townLatitude = Math.round(Number(townInfoClear[1]) * 100 )/ 100;
        let townLongitude = Math.round(Number(townInfoClear[2])* 100)  / 100;

        let city = {
            Town: townName,
            Latitude: townLatitude,
            Longitude: townLongitude
        };

        towns.push(city);
    }
    
    console.log(JSON.stringify(towns));
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);