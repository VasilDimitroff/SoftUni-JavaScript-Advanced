function biggerHalf(array) {
    array.sort((a, b) => a - b);
    let newArray = [];

    if (array.length % 2 !== 0) {
        let countToGet = Math.ceil(array.length / 2);
        newArray = array.slice(countToGet - 1, array.length);
    }
    else {
        let countToGet = array.length / 2;
        newArray = array.slice(countToGet, array.length);
    }

   return newArray;
}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);