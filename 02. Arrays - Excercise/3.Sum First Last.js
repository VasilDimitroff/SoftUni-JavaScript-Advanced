function sumFirstLast(array){
    for (let index = 0; index < array.length; index++) {
        array[index] = Number(array[index]);  
    }

    let firstNumber = array.shift();
    let lastNumber = array.pop();

    console.log(firstNumber + lastNumber);
}

sumFirstLast(['5', '10']);