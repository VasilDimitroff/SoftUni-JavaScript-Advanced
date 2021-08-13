function SumOfNumbers(startNumber, endNumber){
    let parsedStartNumber = Number(startNumber);
    let parsedEndNumber = Number(endNumber);
    let sum = 0;

    for(let i = parsedStartNumber; i <= parsedEndNumber; i++){
        sum += i;
    }
    
    console.log(sum);
}

SumOfNumbers('-8', '20');