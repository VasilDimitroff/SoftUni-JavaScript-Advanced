function smallestTwoNumbers(array){

    array.sort(function(a, b) {
        return a - b;
      });
    firstMax = array[0];
    secondMax = array[1];

    let finalArray = [];
    finalArray.push(firstMax);
    finalArray.push(secondMax);
    console.log(finalArray.join(" "));
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);