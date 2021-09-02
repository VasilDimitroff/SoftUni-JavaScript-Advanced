function solve() {
   let productsElements = document.querySelectorAll('.product');
   let products = [];
   let output = '';

   for (let index = 0; index < productsElements.length; index++) {
      let currentProductInfo = productsElements[index];
      currentProductInfo.addEventListener('click', addProduct);    
   }

   let checkoutElement = document.querySelector('.checkout');
   checkoutElement.addEventListener('click', calculateResult);

   function addProduct(e){
      let divElement = e.currentTarget;

      // find product info tags
      let divChildren = divElement.children;

      let productDetailsElement = divChildren[1].children;
      //product name
      let productName = productDetailsElement[0].textContent;

      let addDivElement = divChildren[2];  
      // button element
      let addButton = addDivElement.children[0];

      // product price
      let productPrice = divChildren[3].textContent;

      let textAreaElement = document.querySelector('textarea');

      if (e.target == addButton) {
         let product = {};
         product.name = productName;
         product.price = Number(productPrice);
         products.push(product);
         
         output += `Added ${product.name} for ${product.price.toFixed(2)} to the cart.\n`;
         textAreaElement.textContent = output;
      }
      //let addButton = divChildren.querySelector('.add-product');  
   }

   function calculateResult(e){
      
      let productNames = [];
      let productPriceSum = 0;

      for (let index = 0; index < products.length; index++) {
         const currentProduct = products[index];

         if (!productNames.includes(currentProduct.name)) {
            productNames.push(currentProduct.name);
         }
        
         productPriceSum += currentProduct.price;
      } 
      
      let textAreaElement = document.querySelector('textarea');
      output += `You bought ${productNames.join(', ')} for ${productPriceSum.toFixed(2)}.`;

      textAreaElement.textContent = output;

      let allAddButtonsElements = document.querySelectorAll('.add-product');

      for (let index = 0; index < allAddButtonsElements.length; index++) {
         const currentButton = allAddButtonsElements[index];
         currentButton.disabled = true;
      }

      checkoutElement.disabled = true;
   }
}