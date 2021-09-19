function solution(array){

    let obj = {};
    obj.list = [];

    function add(string){
        obj.list.push(string);
        return obj.list;
    };

    function remove(string){
        for (let index = 0; index < obj.list.length; index++) {
            let element = obj.list[index];

            if (element === string) {
                obj.list.splice(index, 1);
                index--;
            }
        }

        return obj.list;
    };

    function print(){
        console.log(obj.list.join(','));
    }

    for (let index = 0; index < array.length; index++) {
        let currentCommand = array[index].split(' ');
        let command = currentCommand[0];
        let string = currentCommand[1];

        if (command === 'add') {
            add(string);
        }
        else if (command === 'remove') {
            remove(string);
        }
        else if (command === 'print') {
            print();
        }
    }

    return obj;
}

solution(['add pesho', 'add george', 'add peter', 'remove peter','print']);