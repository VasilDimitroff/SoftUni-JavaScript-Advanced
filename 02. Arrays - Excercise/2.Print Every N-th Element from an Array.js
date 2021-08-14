function printEveryNthElementFromArray(array, step){
    let newArray = [];

    for (let index = 0; index < array.length; index+=step) {
        let element = array[index];
        
        newArray.push(element);
    }

    return newArray;
}

console.log(printEveryNthElementFromArray(	['dsa',
'asd', 
'test', 
'tset'], 
2
));