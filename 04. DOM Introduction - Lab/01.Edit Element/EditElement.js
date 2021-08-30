function editElement(elementById, match, replacer) {
        let newStr = elementById.textContent.replace(match, replacer);
        elementById.innerHTML = newStr;  
}
