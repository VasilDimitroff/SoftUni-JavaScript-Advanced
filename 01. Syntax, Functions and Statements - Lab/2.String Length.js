function StringLength(first, second, third){
    let sum = first.length + second.length + third.length;
    console.log(sum);

    let average = Math.floor(sum / 3);
    console.log(average);
}

StringLength('pasta', '5', '22.3');