function solution(){

    let obj = {};
    obj.value = '';

    obj.append = function(string){
        obj.value += string;
    }

    obj.removeStart = function(howManyChars){
        obj.value = obj.value.slice(howManyChars); 
        return obj.value;
    };

    obj.removeEnd = function(howManyChars){
        obj.value = obj.value.slice(0, howManyChars * -1);
        return obj.value;
    };

    obj.print = function print(){
        console.log(obj.value);
    }

    return obj;
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();