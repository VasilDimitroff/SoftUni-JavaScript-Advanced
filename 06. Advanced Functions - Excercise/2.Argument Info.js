function argumentInfo(...args){

    let count = {};
    count.number = 0;
    count.string = 0;
    count.boolean = 0;
    count.function = 0;

    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        console.log(typeof(element) + ': ' + element);

        if (typeof element == 'number') {
            count.number += 1;
        }
        else if (typeof element == 'string') {
            count.string += 1;
        }
        else if (typeof element == 'boolean') {
            count.boolean += 1;
        }
        else if (typeof element == 'function') {
            count.function += 1;
        }
    }

    let result = Object.entries(count);
    result.sort((a, b) => b-a)

    for (const [key, value] of result) {
        if (value > 0) {
            console.log(`${key} = ${value}`);
        } 
      }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });