function subSum(array, startIndex, endIndex){

    if(!Array.isArray(array) || array.some(e => typeof(e) != 'number')){
        return NaN;
    }

    if(startIndex < 0){
        startIndex = 0
    }

    if(endIndex >= array.length){
        endIndex = array.length - 1;
    }

    let subArray = array.slice(startIndex, endIndex + 1)
    let sum = 0;
    for(index = 0; index < subArray.length; index++) {
        sum += subArray[index];
    }

    return sum;
}
console.log(subSum([1,2,3], 1, 2));