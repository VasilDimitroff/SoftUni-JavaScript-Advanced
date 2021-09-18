function attachEventsListeners() {
    let selectFromElement = document.querySelector('select');
    let optionElementsFrom = selectFromElement.children;

    for (let index = 0; index < optionElementsFrom.length; index++) {
        let inputElement = optionElementsFrom[index];
        inputElement.addEventListener('click', selectItem);

        function selectItem(){
            inputElement.selected = true;
            console.log(inputElement);
        }
    }

    for (let index = 0; index < optionElementsFrom.length; index++) {
        let optElement = optionElementsFrom[index];

        if (optElement.selected) {
            let convertButton = document.querySelector('#convert');
            convertButton.addEventListener('click', convert);
        }   
   
        function convert(e){
            console.log(optElement.value);
        }
    }

   
    
}