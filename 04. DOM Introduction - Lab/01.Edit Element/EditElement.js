function editElement(elementById, match, replacer) {
    // First parameter is a reference to an HTML element, other two parameters are string –
    // match and replacer.
   // You have to replace all occurrences of match inside the text content of the given elements
    // with replacer.

    if (elementById.innerHTML.includes(match)) {
        let newStr = elementById.innerHTML.replace(match, replacer);
        elementById.innerHTML = newStr;
    }     
}
