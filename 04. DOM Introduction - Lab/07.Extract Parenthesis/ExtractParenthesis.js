function extract(content) {
    
    let elementContent = document.querySelector('#' + content).textContent;
    let elements = [];

    for (let index = 0; index < elementContent.length; index++) {
        const element = elementContent[index - 1];
        
        if (element === '(') {
            let text = '';
            for (let j = index; j < elementContent.length; j++) {
                const symbol = elementContent[j];

                if (symbol === ')') {
                    break;
                }
               text += symbol;  
            }  
            elements.push(text); 
        }
    }

    return elements.join('; ');
}