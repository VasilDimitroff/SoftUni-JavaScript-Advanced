function sortingNumbers(array = []){
    array = array.map(x => Number(x));
  
    let newArray = [];

    while (array.length > 0) {
        let maxNumber = Math.max(...array);
        let minNumber = Math.min(...array);
  

        newArray.push(minNumber);
        newArray.push(maxNumber);

        const index = array.indexOf(maxNumber);
        if (index > -1) {
          array.splice(index, 1);
        }

        const index2 = array.indexOf(minNumber);
        if (index > -1) {
          array.splice(index2, 1);
        }
    }

    return newArray;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));