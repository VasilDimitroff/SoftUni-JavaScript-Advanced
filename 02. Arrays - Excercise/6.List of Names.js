function listOfNames(array = []){
    array.sort();

    array.forEach((x, i) => {
        i++;
        console.log(i + '.' + x)
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);