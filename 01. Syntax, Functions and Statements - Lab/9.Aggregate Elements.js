function AggregateElements(array){
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        sum += array[index];
    }
    console.log(sum);

    let inverseSum = 0;

    for (let index = 0; index < array.length; index++) {
        let element = Number(array[index]);
        let inverseElement = 1 / element;

        inverseSum += inverseElement;
    }

    console.log(inverseSum);

    let concat = '';

    for (let index = 0; index < array.length; index++) {
        let element = (array[index]) + '';

        concat = concat + element;    
    }
    console.log(concat);
    
}

AggregateElements([2, 4, 8, 16]);