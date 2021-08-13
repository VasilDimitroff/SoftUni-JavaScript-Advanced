function cookingByNumbers(number, element1, element2, element3, element4, element5) {
    number = Number(number);

    number = executeCommand(number, element1);
    number = executeCommand(number, element2);
    number = executeCommand(number, element3);
    number = executeCommand(number, element4);
    number = executeCommand(number, element5);

    function executeCommand(currentNumber, element) {
        if (element === 'chop') {
            currentNumber = currentNumber / 2;
        }
        else if (element === 'dice') {
            currentNumber = Math.sqrt(currentNumber);
        }
        else if (element === 'spice') {
            currentNumber += 1;
        }
        else if (element === 'bake') {
            currentNumber = currentNumber * 3;
        }
        else if (element === 'fillet') {
            currentNumber = currentNumber - (0.20 * currentNumber);
        }

        console.log(currentNumber);

        return currentNumber;
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');