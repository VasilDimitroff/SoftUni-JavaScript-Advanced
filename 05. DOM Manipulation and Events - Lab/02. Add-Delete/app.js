function addItem() {
    let ulElement = document.querySelector('#items');

    let input = document.querySelector('#newItemText');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = input.value;

    input.value = '';

    let aElement = document.createElement('a');
    aElement.addEventListener('click', removeItem);
    aElement.setAttribute('href', '#');
    aElement.textContent = '[Delete]';

    newLiElement.appendChild(aElement);

    ulElement.appendChild(newLiElement);

    function removeItem(e){
        let element = e.target.parentElement;
        element.remove();
    }
}

