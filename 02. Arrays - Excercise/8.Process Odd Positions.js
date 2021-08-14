function processOddPositions(array){
   let newArray = [];

   for (let index = 0; index < array.length; index++) {
       let element = array[index];

       if (index % 2 != 0) {
           newArray.push(element * 2);
       }  
   }

   newArray.reverse();
   return newArray;
}

processOddPositions([3, 0, 10, 4, 7, 3]);