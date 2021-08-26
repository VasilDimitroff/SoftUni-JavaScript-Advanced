function rectangle(widthInput, heightInput, colorInput){

    let firstLetter = colorInput[0].toUpperCase();
    let toEnd = colorInput.slice(1);
    let colorUpperCaseFirstLetter = firstLetter + toEnd;

    let rectangle = {};
    rectangle.width = widthInput;
    rectangle.height = heightInput;
    rectangle.color = colorUpperCaseFirstLetter;

    rectangle.calcArea = function(){
        return rectangle.width * rectangle.height;     
    }
    
     return rectangle;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());