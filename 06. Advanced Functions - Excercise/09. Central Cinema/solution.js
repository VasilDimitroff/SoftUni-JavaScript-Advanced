function solve() {
    
    let onScreenButton = document.querySelectorAll('button')[0];
    onScreenButton.addEventListener('click', onScreen);

    let liEl = document.createElement('li');
    let spanEl = document.createElement('span');
    let strongElFirst = document.createElement('strong');
    let divElement = document.createElement('div');
    let strongElSec = document.createElement('strong');
    let inputEl = document.createElement('input');
    let buttonEl = document.createElement('button');


    let archLiElement = document.createElement('li');
    let archSpanEl = document.createElement('span');
    let archStrongElFirst = document.createElement('strong');
    let archDeleteButtonEl = document.createElement('button');


    function onScreen(e){
        e.preventDefault();
        let parent = e.target.parentElement;
        let inputElements = parent.children;

        let name = inputElements[0].value;
        let hall = inputElements[1].value;
        let price = Number(inputElements[2].value);

        let moviesEl = document.querySelector('#movies');

        spanEl.textContent = name;
        strongElFirst.textContent = `Hall: ${hall}`;
        strongElSec.textContent = Number(price.toFixed(2));
        inputEl.setAttribute('placeholder', 'Tickets sold')
        buttonEl.textContent = 'Archive';

        moviesEl.appendChild(liEl);
        liEl.appendChild(spanEl);
        liEl.appendChild(strongElFirst);
        liEl.appendChild(divElement);
        divElement.appendChild(strongElSec);
        divElement.appendChild(inputEl);
        divElement.appendChild(buttonEl);
    }

    let ticketsSold = 0;
    buttonEl.addEventListener('click', archiveMovie);

    function archiveMovie(e){
        e.preventDefault();
        ticketsSold = e.target.previousSibling.value;

        moviePrice = e.target.previousSibling.previousSibling.textContent;      
        movieName = e.target.parentElement.previousSibling.previousSibling.textContent;
        hallName = e.target.parentElement.previousSibling.textContent;
 
        if (!ticketsSold) {
            return;
        }

        let totalAmount = ticketsSold * moviePrice
      
        let archUlElement = document.querySelectorAll('ul')[1];
        archUlElement.appendChild(archLiElement);
        archLiElement.appendChild(archSpanEl);
        archLiElement.appendChild(archStrongElFirst);
        archLiElement.appendChild(archDeleteButtonEl);

        archSpanEl.textContent = movieName;
        archStrongElFirst.textContent = `Total amount: ${totalAmount.toFixed(2)}`;
        archDeleteButtonEl.textContent = 'Delete';

        let liElementToRemove = e.target.parentElement.previousSibling.previousSibling.parentElement;
        liElementToRemove.remove();
    }

    archDeleteButtonEl.addEventListener('click', deleteMovie);

    function deleteMovie(e){
        let liElementToRemove = e.target.parentElement;
        liElementToRemove.remove();
    }

    let buttonClear = document.querySelector('#archive').children[2];
    buttonClear.addEventListener('click', clearList);

    function clearList(e){
        let ulElementToRemove = document.querySelectorAll('ul')[1];
        let liElementsToRemove = ulElementToRemove.children;

        for(i = 0; i < liElementsToRemove.length; i++){
            let li = liElementsToRemove[i];
            li.remove();
        }
    }
}