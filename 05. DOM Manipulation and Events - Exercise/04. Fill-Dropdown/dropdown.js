function addItem() {
    let newItemTextElement = document.querySelector('#newItemText');
    let newItemValueElement = document.querySelector('#newItemValue');

    let selectElement =  document.querySelector('#menu');

    let newOptionElement = document.createElement('option');

    newOptionElement.textContent = newItemTextElement.value;
    newOptionElement.value = newItemValueElement.value;

    newItemValueElement.value = '';
    newItemTextElement.value = '';
   
    selectElement.appendChild(newOptionElement);
}