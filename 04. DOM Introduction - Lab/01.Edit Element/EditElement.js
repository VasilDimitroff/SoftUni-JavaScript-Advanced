function editElement(elementById, match, replacer) {
    // First parameter is a reference to an HTML element, other two parameters are string –
    // match and replacer.
   // You have to replace all occurrences of match inside the text content of the given elements
    // with replacer.
    console.log(elementById);

    let element = elementById;

    if (element.innerHTML.includes(match)) {
        let newStr = element.innerHTML.replace(match, replacer);
        element.innerHTML = newStr;
    }     
}
