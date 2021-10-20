class Restaurant{
    constructor(budget){
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    get budgetMoney(){
        return this._budget;
    }

    set budgetMoney(value){
        this._budget = value;
    }

    loadProducts(products){
        for(let index = 0; index < products.length; index++){
            let currentProductTokens = products[index].split(' ');

            let name = currentProductTokens[0];
            let quantity = Number(currentProductTokens[1]);
            let totalPrice = Number(currentProductTokens[2]);

            if(this.budgetMoney >= totalPrice){
                if(!this.stockProducts[name]){
                    this.stockProducts[name] = 0;
                }

                this.stockProducts[name] += quantity;
                this.budgetMoney -= totalPrice;
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
                        let targetProduct = this.stockProducts[product.name]                
                        targetProduct -= product.quantity;
                    });

                    let priceOfMeal =  this.menu[meal].price;
                    this.budgetMoney += priceOfMeal;
                    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${priceOfMeal}.`;
                }
        }
    }
}



let test = new Restaurant(1000);
test.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']);
console.log(test.budgetMoney)
