class Restaurant{
    constructor(budget){
        this.budget = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products){
        for(let index = 0; index < products.length; index++){
            let currentProductTokens = products[index].split(' ');

            let name = currentProductTokens[0];
            let quantity = Number(currentProductTokens[1]);
            let totalPrice = Number(currentProductTokens[2]);

            if(this.budget >= totalPrice){
                if(!this.stockProducts[name]){
                    this.stockProducts[name] = 0;
                }

                this.stockProducts[name] += quantity;
                this.budget -= totalPrice;
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            }
            else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }

        let result = this.history.join('\n');
        return result;
    }

    addToMenu(meal, productsArray, price){

        let products = [];

        for(let index = 0; index < productsArray.length; index++){
            let currentProductTokens = productsArray[index].split(' ');

            let name = currentProductTokens[0];
            let quantity = Number(currentProductTokens[1]);

            let product = {
                name: name,
                quantity: quantity
            };

            products.push(product);
        }

        if(!this.menu[meal]){
            this.menu[meal] = {
                products: products,
                price: price
            }
            if(Object.keys(this.menu).length === 1){
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }
            else if(Object.keys(this.menu).length > 1){
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }
        }
        else{
           return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu(){
        let result = [];
        let counter = 0;

        for (const property in this.menu) {
           
            let currentMeal = `${property} - $ ${this.menu[property].price}`;

            if(counter < Object.keys(this.menu).length - 1){
                currentMeal += '\n';
            }

            result.push(currentMeal);
            counter++;
          }

          return result;
    }

    makeTheOrder(meal){
        if(!this.menu[meal]){
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        else {
            let haventProducts = 
                this.menu[meal].products.some(product => !this.stockProducts.hasOwnProperty(product.name));

                let canWeOrder = true;
                for(let index = 0; index < this.menu[meal].products.length; index++){
                     const currentProduct = this.menu[meal].products[index];
                     
                     if(!this.stockProducts.hasOwnProperty(currentProduct.name)){
                         canWeOrder = false;
                        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                     }
                }

                if(canWeOrder){
                    this.menu[meal].products.forEach(product => {
                        //! стокПродукт.финд => find е за масиви, а не за обект
                        let targetProduct = this.stockProducts.find(product.name == this.stockProducts[product.name]);
                        targetProduct.quantity -= 1;
                    });

                    let priceOfMeal =  this.menu[meal].price;
                    this.budget += priceOfMeal;
                    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
                }
        }
    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
