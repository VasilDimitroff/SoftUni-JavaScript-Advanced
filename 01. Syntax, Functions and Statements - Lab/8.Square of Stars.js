function SquareOfStars(size = 5){

    for(i = 1; i <= size; i++){
        
        let line = '';

        for(j = 1; j <= size; j++){
         line += '* '  
        }
        
        console.log(line);
    }
}

SquareOfStars(5);