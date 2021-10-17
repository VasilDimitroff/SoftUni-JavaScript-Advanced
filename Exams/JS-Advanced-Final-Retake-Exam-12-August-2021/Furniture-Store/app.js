window.addEventListener('load', solve);

function solve() {
    let addButton = document.querySelector('#add');
    addButton.addEventListener('click', addFurniture);

    let modelElement = document.querySelector('#model');
    let yearElement = document.querySelector('#year');
    let descElement = document.querySelector('#description');
    let priceElement = document.querySelector('#price');

    function addFurniture(e){
        e.preventDefault();
        
        if (!modelElement.value || !descElement.value) {
            return;
        }
        if (yearElement.value < 0 || priceElement.value < 0 || !yearElement.value || !priceElement.value) {
            return;
        }   

        let furniture = {
            model: modelElement.value,
            year: yearElement.value,
            description: descElement.value,
            price: priceElement.value
        };

        let tbodyElement = document.querySelector('#furniture-list');

        let infoTrElement = document.createElement('tr');
        infoTrElement.classList.add('info');

        let nameTdElement = document.createElement('td');
        nameTdElement.textContent = furniture.model;

        let priceTdElement = document.createElement('td');
        priceTdElement.textContent = furniture.price;

        let buttonsTdElement = document.createElement('td');
        console.log(buttonsTdElement);

        let moreInfoButton = document.createElement('button');
        moreInfoButton.classList.add('moreBtn');
        moreInfoButton.textContent = 'More Info';

        let buyButton = document.createElement('button');
        buyButton.classList.add('buyBtn');
        buyButton.textContent = 'Buy it';

        let hideTrElement = document.createElement('tr');
        hideTrElement.classList.add('hide');

        let yearTdElement = document.createElement('td');
        yearTdElement.textContent = furniture.year;
        let descriptionTdElement = document.createElement('td');
        descriptionTdElement.textContent = furniture.description;
        descriptionTdElement.setAttribute('colspan', 3);

        buttonsTdElement.appendChild(moreInfoButton);
        buttonsTdElement.appendChild(buyButton);

        infoTrElement.appendChild(nameTdElement);
        infoTrElement.appendChild(priceTdElement);   
        infoTrElement.appendChild(buttonsTdElement);

        hideTrElement.appendChild(yearTdElement)
        hideTrElement.appendChild(descriptionTdElement)

        tbodyElement.appendChild(infoTrElement);
        tbodyElement.appendChild(hideTrElement);

        modelElement.value = 'Chair';
        yearElement.value = 1991;
        descElement.value = 'The best chair';
        priceElement.value = '45.50';

        moreInfoButton.addEventListener('click', showMoreInfo);

        function showMoreInfo(e){     
            if (e.target.textContent = 'More Info') {
                e.target.textContent = 'Less Info'
                hideTrElement.style.display = 'contents';
            } else if (e.target.textContent = 'Less Info'){
                e.target.textContent = 'More Info'
                hideTrElement.style.display = 'none';
            }     
        }
    }
}
