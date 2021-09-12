function solve() {

  let generateButton = document.querySelectorAll('button')[0];
  generateButton.addEventListener('click', generateObjects);
  
  let inputElement = document.querySelectorAll('textarea')[0];
  let outputElement = document.querySelectorAll('textarea')[1];

  function generateObjects(){

    let array = JSON.parse(inputElement.value);
    let tbodyElement = document.querySelector('tbody');

    for (let index = 0; index < array.length; index++) {
      let currentProduct = array[index];

      let trElement = document.createElement('tr');

      let imageTd = document.createElement('td');
      let nameTd = document.createElement('td');
      let priceTd = document.createElement('td');
      let decFactorTd = document.createElement('td');
      let checkboxTd = document.createElement('td');

      imageTd.innerHTML = `<img
      src="${currentProduct.img}">`;

      nameTd.textContent = currentProduct.name;
      priceTd.textContent = currentProduct.price;
      decFactorTd.textContent = currentProduct.decFactor;

      checkboxTd.innerHTML = '<input type="checkbox" />';

      trElement.appendChild(imageTd);
      trElement.appendChild(nameTd);
      trElement.appendChild(priceTd);
      trElement.appendChild(decFactorTd);
      trElement.appendChild(checkboxTd);

      tbodyElement.appendChild(trElement);
    }

    let buyButton = document.querySelectorAll('button')[1];
    buyButton.addEventListener('click', buyProducts);

    function buyProducts(){  
      let checkboxes = document.querySelectorAll('input[type="checkbox"]');
      let products = [];
      let totalPrice = 0;
      let totalDecorationFactor = 0;

      for (let index = 0; index < checkboxes.length; index++) {
        let checkbox = checkboxes[index];

        if (checkbox.checked) {
          let tdParent = checkbox.parentElement;
          let trParent = tdParent.parentElement;
         
          let tdElements = trParent.children;
          let productName = tdElements[1].textContent;
          products.push(productName);
          
          let price = Number(tdElements[2].textContent);
          totalPrice += price;

          let decorationFactor = Number(tdElements[3].textContent);
          totalDecorationFactor += decorationFactor;
        }
      }
      
      let averageDecorationFactor = totalDecorationFactor / products.length;

      let output = `Bought furniture: ${products.join(', ')}` + '\n';
      output += `Total price: ${totalPrice.toFixed(2)}` + '\n';
      output += `Average decoration factor: ${averageDecorationFactor}`;
      
      outputElement.value = output;
    }
  }
}