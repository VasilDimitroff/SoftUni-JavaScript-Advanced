window.addEventListener('load', solve);

function solve() {
    let inputElements = document.querySelector('form').querySelectorAll('input');
    let input = {
        genre: inputElements[0],
        name: inputElements[1],
        author: inputElements[2],
        date: inputElements[3],
    };

    let addButton = document.querySelector('#add-btn');
    addButton.addEventListener('click', addSong);

    let addedSongsElement = document.querySelectorAll('.all-hits-container')[0];
    let savedSongs = document.querySelectorAll('.saved-container')[0]; 
    let pLikesCountElement = document.querySelectorAll('.likes')[0].querySelector('p');

    function addSong(e){
        e.preventDefault();

        if (input.name.value == '' || input.genre.value == ''|| input.author.value == '' || input.date.value == '') {
            return;
        }

        let divElement = createElement('div', '', 'hits-info');

        let imageElement = document.createElement('img');
        imageElement.setAttribute('src', './static/img/img.png');

        let h2Genre = createElement('h2', 'Genre: ' + input.genre.value);
        let h2Name = createElement('h2', 'Name: ' + input.name.value);
        let h2Author = createElement('h2', 'Author: ' + input.author.value);
        let h3Date = createElement('h3', 'Date: ' + input.date.value);

        let saveButton = createElement('button', 'Save song', 'save-btn');
        let likeButton = createElement('button', 'Like song', 'like-btn');
        let deleteButton = createElement('button', 'Delete', 'delete-btn');

        divElement.appendChild(imageElement);
        divElement.appendChild(h2Genre);
        divElement.appendChild(h2Name);
        divElement.appendChild(h2Author);
        divElement.appendChild(h3Date);
        divElement.appendChild(saveButton);
        divElement.appendChild(likeButton);
        divElement.appendChild(deleteButton);

        addedSongsElement.appendChild(divElement);

        input.name.value = '';
        input.author.value  = '';
        input.genre.value  = '';
        input.date.value  = '';

        deleteButton.addEventListener('click', deleteSong);
        likeButton.addEventListener('click', increaseLikes);
        saveButton.addEventListener('click', saveSong);
    }

    function saveSong(e){
        let elementToMove = e.currentTarget.parentElement;
        savedSongs.appendChild(elementToMove);

        let buttons = elementToMove.querySelectorAll('button');

        let saveButton =buttons[0];
        let likeButton =buttons[1];

        saveButton.remove();
        likeButton.remove();
    }

    function increaseLikes(e){
        let pInfo = pLikesCountElement.textContent.split(' ');
        let count = Number(pInfo[2]);
        count++;
        pLikesCountElement.textContent = `Total Likes: ${count}`;
        let button = e.currentTarget;
        button.setAttribute('disabled', '');
    }

    function deleteSong(e){
        let parentElement = e.currentTarget.parentElement;
        parentElement.remove();

        //let pInfo = pLikesCountElement.textContent.split(' ');
        //let count = Number(pInfo[2]);
       // count--;
        //pLikesCountElement.textContent = `Total Likes: ${count}`;
    }

    function createElement(tagName, content, className){
        let element = document.createElement(tagName);
        element.textContent = content;
        if(className){
              element.classList.add(className);
           }

        return element;
     }
}