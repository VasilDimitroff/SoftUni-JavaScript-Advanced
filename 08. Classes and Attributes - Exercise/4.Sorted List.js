class List{
    list = [];

   add(number){
       this.list.push(number);
       this.list.sort((a, b) => a - b);
       this.size++;
   }
   remove(index){
    if (index > -1 && index < this.list.length) {
        this.list.splice(index, 1);
        this.list.sort((a, b) => a - b);
        this.size--;
    }
   }

   get(index){
    if (index > -1 && index < this.list.length) {
        return this.list[index];
    }    
   }

   size = this.list.length;
}

let list = new List();
list.add(5);
list.add(3);

console.log(list.get(0)); 
list.remove(0);
console.log(list.size);
