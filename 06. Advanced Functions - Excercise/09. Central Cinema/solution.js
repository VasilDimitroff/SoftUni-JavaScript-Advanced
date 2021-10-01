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
        
        let archiveEl = document.querySelector('#archive');

        archiveEl.innerHTML = 'tuk';
    }
    
}