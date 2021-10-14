class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
        this.initialLength = string.length;
        this.initialString = string;
    }

   

    increase(num){
        this.innerLength += num;
    }

    decrease(num){
        if (this.innerLength -  num < 0) {
            num = this.innerLength;
        }

        let remainCharsCount = this.innerLength - num;
        this.innerString = this.innerString.substring(0, remainCharsCount);
        this.innerLength = remainCharsCount;
    }

    toString(){
        if (this.initialLength > this.innerLength) {
            this.innerString = this.initialString.substring(0, this.innerLength)
            return this.innerString + '...';
        }

        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test