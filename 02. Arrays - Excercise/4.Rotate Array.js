function rotateArray(array, rotations){
  
    for (let index = 0; index < rotations; index++) {
        const element = array[index];

        let lastElement = array.pop();

        array.unshift(lastElement);   
    }

    console.log(array.join(' '));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2);