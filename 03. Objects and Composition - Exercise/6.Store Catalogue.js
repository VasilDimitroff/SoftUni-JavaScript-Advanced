function storeCatalogue(array){
    let products = [];
    let letters = [];

    for (let index = 0; index < array.length; index++) {
        let element = array[index];

        let productInfo = element.split(' : ');
        let product = {};
        product.name = productInfo[0];
        product.price = Number(productInfo[1]);

        let letter = product.name[0];

        if (!letters.some(l => l === letter)) {
            letters.push(letter);
        }
       
        products.push(product);
        //console.log(product);   
    }

    letters.sort();
    products.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

    for (let index = 0; index < letters.length; index++) {
        let letter = letters[index];

        console.log(letter);

        let targetProducts = products.filter(p => p.name[0].toUpperCase() == letter.toUpperCase());
        
        for (let j = 0; j < targetProducts.length; j++) {
            let product = targetProducts[j];

            console.log('  ' + `${product.name}: ${product.price}`);
            
        }
    }

    
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);