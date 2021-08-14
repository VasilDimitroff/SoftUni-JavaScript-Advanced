function printEvenPositions(array) {
    let evenPositionsNumbers = [];

    for (let index = 0; index < array.length; index++) {
        let currentNumber = array[index];
        if (index % 2 == 0) {
            evenPositionsNumbers.push(currentNumber);
        }     
    }

    console.log(evenPositionsNumbers.join(' '));
}

printEvenPositions(['5', '10']);