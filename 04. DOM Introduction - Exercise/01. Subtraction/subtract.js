function subtract() {
    let firstNumber = Number(document.querySelector('#firstNumber').value);
    let secondNumber = Number(document.querySelector('#secondNumber').value);

    let divEl = document.querySelector('#result');
    divEl.textContent  = firstNumber - secondNumber;
}