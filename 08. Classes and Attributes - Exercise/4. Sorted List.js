class List{
    list = [];

   add(number){
       this.list.push(number);
       this.list.sort((a, b) => a - b);
   }
   remove(index){
    if (index > -1 && index < this.list.length) {
        this.list.splice(index, 1);
        this.list.sort((a, b) => a - b);
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
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
