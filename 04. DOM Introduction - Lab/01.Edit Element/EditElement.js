function editElement(elementById, match, replacer) {
    console.log(elementById);

    let element = elementById;

    if (element.innerHTML.includes(match)) {
        let newStr = element.innerHTML.replace(match, replacer);
        element.innerHTML = newSt;
    }     
}
