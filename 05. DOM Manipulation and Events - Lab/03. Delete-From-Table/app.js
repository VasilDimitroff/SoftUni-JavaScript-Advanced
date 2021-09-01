function deleteByEmail() {
    let tdElements = document.getElementsByTagName('td');

    let tdValues = [];

    for (let index = 0; index < tdElements.length; index++) {
        const element = tdElements[index].textContent;
        tdValues.push(element);

    }

    let emailsTdElements = tdValues.filter(e => e.includes('@'));

    let input = document.querySelector('input');
    let inputValue = input.value;
    let result = '';
    
    for (let index = 0; index < tdElements.length; index++) {
        const element = tdElements[index];

        if (element.textContent.includes(inputValue)) {
            let parent = element.parentElement;
            parent.remove();
            result = 'Deleted.';
            break;
        } else {
            result = 'Not found.';
        }
    }

    let resultElement = document.querySelector('#result');
    resultElement.textContent = result;
}