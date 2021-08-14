function validityChecker(x1, y1, x2, y2){
    let firstPointToZeroDistanceSquare = (x1 * x1) + (y1 * y1);
    let firstPointToZeroDistance = Math.sqrt(firstPointToZeroDistanceSquare);

    if(Number.isInteger(firstPointToZeroDistance)){
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    } else{
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }

    let secondPointToZeroDistanceSquare = (x2 * x2) + (y2 * y2);
    let secondPointToZeroDistance = Math.sqrt(secondPointToZeroDistanceSquare);

    if(Number.isInteger(secondPointToZeroDistance)){
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    } else{
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }

    let distanceBetweenTwoPoints = Math.abs(Math.sqrt((x1 * x1) + (y1*y1) - (x2 * x2) + (y2 * y2)));
    
    if(Number.isInteger(distanceBetweenTwoPoints)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
  
}

validityChecker(2, 1, 1, 1);