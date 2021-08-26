function calorieObject(array){

    let obj = {};

    for (let index = 0; index < array.length; index++) {
        let data = array[index];
        
        if (index % 2 == 0) {
            obj[data] = '';
            
        } else{
            calories = Number(data);
            obj[array[index-1]] = calories; 
        }
    }

    console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);