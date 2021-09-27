function calculator() {

    let obj = {};
    obj.firstNumber = 0;
    obj.secondNumber = 0;
    obj.result = 0;

    return {
        init(selector1, selector2, selector3){      
           obj.selector1 = selector1;
           obj.selector2 = selector2;
           obj.selector3 = selector3;
        },

        add(){
           let firstNumberStr = document.querySelector(`${obj.selector1}`);
           let firstNum = Number(firstNumberStr.value);

           let secondNumberStr = document.querySelector(`${obj.selector2}`);
           let secondNum = Number(secondNumberStr.value);

           let resultElement = document.querySelector(`${obj.selector3}`);
           resultElement.value = firstNum + secondNum;

           obj.result = resultElement.value;

        },

        subtract(){
            let firstNumberStr = document.querySelector(`${obj.selector1}`);
           let firstNum = Number(firstNumberStr.value);

           let secondNumberStr = document.querySelector(`${obj.selector2}`);
           obj.selector2 = secondNumberStr;
           let secondNum = Number(secondNumberStr.value);

           let resultElement = document.querySelector(`${obj.selector3}`);
           resultElement.value = firstNum - secondNum;

           obj.result = resultElement.value;
        }
    }
}
 
const calculate = calculator(); 
calculate.init ('#num1', '#num2', '#result'); 

