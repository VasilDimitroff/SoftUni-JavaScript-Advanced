function CircleArea(argument){
    //A = πr2
    if(typeof(argument) === 'number'){
        let area = Math.PI*(argument**2);
        area = area.toFixed(2);
        console.log(area);
    } else {
        console.log('We can not calculate the circle area, because we receive a ' + typeof(argument)+'.')
    }
}

CircleArea(5);
