function extractText() {
    let liItems = document.getElementById('items').childNodes;

    let resultElement = document.querySelector('#result');

    for (let index = 0; index < liItems.length; index++) {
        const element = liItems[index];
        if (element.textContent.trim() !== '') {
            if (resultElement.textContent !== '') {
                resultElement.textContent += '\n' + element.textContent;
            } else {
                resultElement.textContent += element.textContent;
            }   
        }
    }
}