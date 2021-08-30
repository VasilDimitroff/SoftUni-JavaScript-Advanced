function calc() {
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);

    let sumElement = document.querySelector('#sum');
    let sum = num1 + num2
    sumElement.value = sum;
}
