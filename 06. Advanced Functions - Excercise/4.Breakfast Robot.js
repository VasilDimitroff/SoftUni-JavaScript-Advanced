function solution (){
    let product = {};
    product.protein = 0;
    product.carbohydrate = 0;
    product.fat = 0;
    product.flavour = 0;  

    function manager(arguments){
        let data = arguments.split(' ');

        let command = data[0];
        let ingredient = undefined;
        let quantity = 0;

        if (data.length === 3) {
            ingredient = data[1];
            quantity = Number(data[2]);
        }

        if (command === 'restock') {

            if (ingredient === 'protein') {
                product.protein += quantity;
            } else if (ingredient === 'carbohydrate') {
                product.carbohydrate += quantity;  
            } else if (ingredient === 'fat'){
                product.fat += quantity;
            } else if (ingredient === 'flavour') {
                product.flavour += quantity;
            }
            return 'Success';
        }

        else if (command === 'prepare') {
            if (ingredient === 'apple') {
                if (product.carbohydrate >= 1) {
                    if (product.flavour >= 2) {
                        product.carbohydrate -= 1;
                        product.flavour -=2;
                        return 'Success';
                    } else {
                        return `Error: not enough flavour in stock`; 
                    }
                } else {
                    return `Error: not enough carbohydrate in stock`;
                }
            }

            else if (ingredient === 'lemonade') {
                if (product.carbohydrate >= 10) {
                    if (product.flavour >= 20) {
                        product.carbohydrate -= 10;
                        product.flavour -=20;
                        return 'Success';
                    } else {
                        return `Error: not enough flavour in stock`; 
                    }
                } else {
                    return `Error: not enough carbohydrate in stock`;
                } 
            }

            else if (ingredient === 'burger') {
                if (product.carbohydrate >= 5) {
                    if (product.fat >= 7) {
                        if (product.flavour >= 3) {
                            product.carbohydrate -= 5;
                            product.flavour -= 3;
                            product.fat -= 7;
                            return 'Success';
                        } else {
                            return `Error: not enough flavour in stock`; 
                        }
                        
                    } else {
                        return `Error: not enough fat in stock`; 
                    }
                } else {
                    return `Error: not enough carbohydrate in stock`;
                } 
            }

            else if (ingredient === 'eggs') {
                if (product.protein >= 5) {
                    if (product.fat >= 1) {
                        if (product.flavour >= 1) {
                            product.protein -= 5;
                            product.flavour -= 1;
                            product.fat -= 1;
                            return 'Success';
                        } else {
                            return `Error: not enough flavour in stock`; 
                        }
                        
                    } else {
                        return `Error: not enough fat in stock`; 
                    }
                } else {
                    return `Error: not enough protein in stock`;
                } 
            }

            else if (ingredient === 'turkey') {
                if (product.protein >= 10) {
                    if (product.carbohydrate >= 10) {
                        if (product.fat >= 10) {
                            if (product.flavour >= 10) {
                                product.protein -= 10;
                                product.carbohydrate -= 10;
                                product.fat -= 10;
                                product.flavour -= 10;
                                return 'Success';
                            } else {
                                return `Error: not enough flavour in stock`; 
                            }
                           
                        } else {
                            return `Error: not enough fat in stock`; 
                        }
                        
                    } else {
                        return `Error: not enough carbohydrate in stock`; 
                    }
                } else {
                    return `Error: not enough protein in stock`;
                } 
            }
        }
        else if (command === 'report'){
            return `protein=${product.protein} carbohydrate=${product.carbohydrate} fat=${product.fat} flavour=${product.flavour}`;
        }
    }

    return manager;
}

let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager ("report"));