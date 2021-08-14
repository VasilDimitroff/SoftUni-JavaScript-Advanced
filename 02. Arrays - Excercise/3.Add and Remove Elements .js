function addAndRemoveElements(array) {

    let numbers = [];

    for (let index = 0; index < array.length; index++) {
        let cmd = array[index];

        if (cmd == 'add') {
            numbers.push(index +1);
        }
        else if (cmd == 'remove') {
            numbers.pop();
        }
    }

    if (numbers.length == 0) {
        console.log("Empty");
    }
    else{
        for (let index = 0; index < numbers.length; index++) {
            console.log(numbers[index]);      
        }
    }
}

addAndRemoveElements(['remove', 
'remove', 
'remove']);