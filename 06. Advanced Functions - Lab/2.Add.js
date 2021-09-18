function solution(number){
    this.value = Number(number);
    this.initialValue = Number(number);

    function addNumber(arg){
     this.value = this.initialValue + Number(arg);
     return this.value;
    }

   return addNumber;
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));