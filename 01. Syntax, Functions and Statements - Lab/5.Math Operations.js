function MathOperation(firstNumber, secondNumber, sign){
    switch (sign) {
        case '+':
          console.log(firstNumber + secondNumber);
          break;
        case '-':
          console.log(firstNumber - secondNumber);
          break;
        case '/':
          console.log(firstNumber / secondNumber);
          break;  
        case '%':
            console.log(firstNumber % secondNumber);
          break; 
        case '**':
            console.log(firstNumber ** secondNumber);
          break; 
        case '*':
            console.log(firstNumber * secondNumber);
          break;
      }
}

MathOperation(3, 5.5, '*');