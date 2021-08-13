function sameNumbers(number){
    
    let numberAsString = number.toString();
    let areNumbersSame = true;
    let sumOfDigits = 0;

    for(i = 0; i < numberAsString.length; i++){     
        sumOfDigits += Number(numberAsString[i]);

        if (i === 0){
            continue;
        }

        if (numberAsString[i] != numberAsString[i-1]){
            areNumbersSame = false;
        }
    }

    console.log(areNumbersSame);
    console.log(sumOfDigits);
}

sameNumbers(2222222);