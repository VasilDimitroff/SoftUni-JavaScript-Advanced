function extractIncreasingSubSequenceFromArray(array){
    let filteredArray = [array[0]];
  for (let index = 1; index < array.length; index++) {
      let element = array[index];
      
      let maxNumber = Math.max(...filteredArray);

      if (element >= maxNumber) {
          filteredArray.push(element);
      }
  }

  return filteredArray;
}

console.log(extractIncreasingSubSequenceFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]));