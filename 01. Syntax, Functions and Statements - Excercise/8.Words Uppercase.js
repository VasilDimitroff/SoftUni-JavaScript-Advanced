function wordsUppercase(str) {

    let array = [];
    let tempStr = '';
    for (let i = 0; i <= str.length; i++) {
        let isInside = false;

        if (i == str.length) {
            array.push(tempStr);
            break;
        }

        if (str[i].match(/[A-z]/)) {
            tempStr += str[i].toUpperCase();
            isInside = true;
        }  
         
        if (isInside === false) {
            array.push(tempStr);
            tempStr='';
            array.push(str[i]);
        }       
    }

    let newArray = array.filter(e => e.match(/[A-z]/));

    console.log(newArray.join(', '));
}
wordsUppercase('Funcs in JS');
