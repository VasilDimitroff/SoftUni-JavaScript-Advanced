function wordsUppercase(str) {

    let newString = '';
    for (let i = 0; i < str.length; i++) {

        if (str[i].match(/[A-z]/)) {
            newString += str[i].toUpperCase();
        } else if(str[i] == ' ' || str[i] == '.') {
            
            if(str[i-1] == '.'){
                continue;
            }
            newString += ' ';
        }
    }

    let array = newString.split(' ');

    console.log(array.join(', '));
}

wordsUppercase('Functions in JS can be nested, i.e. hold other functions');