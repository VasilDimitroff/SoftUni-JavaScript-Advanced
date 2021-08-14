function diagonalSums(matrix){
    let array = matrix.map(row => 
        row.map(col =>
            Number(col)));

            let firstDiagonalSum = matrix[0][0];
            let secondDiagonalSum = 0;

   for (let row = 1; row < array.length; row++) {

       for (let col = row; col < array.length; col++) {
           
        firstDiagonalSum += array[row][col];
        break;
       } 
   }

   for (var i = 0; i < matrix.length; i++) {
    secondDiagonalSum += matrix[i][matrix.length-i-1];
  }
 
  let resultArray = [firstDiagonalSum, secondDiagonalSum];
    console.log(resultArray.join(' '));
}

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);