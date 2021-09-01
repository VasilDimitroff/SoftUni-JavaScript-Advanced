function focused() {
    let mainDivElement = document.getElementsByTagName('div')[0];
    let divElements = mainDivElement.children;

    for (let index = 0; index < divElements.length; index++) {
        let element = divElements[index];
        element.addEventListener('mouseover', onMouseOver);
       
        element.addEventListener('mouseout', onMouseOut);     
    }
    
    function onMouseOver(e){
        this.classList.add('focused');
    }

    function onMouseOut(e){
        this.classList.remove('focused');
    }
}