function negativeAndPositiveNumbers(array) {

    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        let element = Number(array[index]);

        if (element < 0) {   
            newArray.unshift(element);
        }
        else{
            newArray.push(element);
        }    
    }

    for (let index = 0; index < array.length; index++) {
       console.log(newArray[index]);;     
    }
}

negativeAndPositiveNumbers([7, -2, 8, 9]);