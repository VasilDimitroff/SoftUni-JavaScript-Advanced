function addItem() {
    let input = document.querySelector('#newItemText');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = input.value;

    let ulElement = document.querySelector("#items");
    ulElement.appendChild(newLiElement)

    input.value = '';
}