function solve(){
    let authorElement = document.querySelector('#creator');
    let titleElement = document.querySelector('#title');
    let categoryElement = document.querySelector('#category');
    let contentElement = document.querySelector('#content');
    let createButton = document.getElementsByClassName('create')[0];
    let postsSectionElement = document.querySelector('main').querySelector('section');
    let titles = [];

    createButton.addEventListener('click', createPost);

    function createPost(e){
       e.preventDefault();

      //Create article element
      let articleElement = createElement('article');

      //Create h1 element
      let h1Element = createElement('h1', titleElement.value);
      articleElement.appendChild(h1Element);

      //Create p element or category with strong element
      let pCategoryElement = createElement('p', 'Category: ');
      let strongCategoryElement = createElement('strong', categoryElement.value);

      pCategoryElement.appendChild(strongCategoryElement);
      articleElement.appendChild(pCategoryElement);

      //Create p element or creator with strong element
      let pCreatorElement = createElement('p', 'Creator: ');
      let strongCreatorElement = createElement('strong', authorElement.value);

      pCreatorElement.appendChild(strongCreatorElement);
      articleElement.appendChild(pCreatorElement);


      //create p element with article content
      let pContentElement = createElement('p', contentElement.value);
      articleElement.appendChild(pContentElement);


       //Create div with containing buttons
       let divButtonsElement = createElement('div', '', ['buttons']);
       let deleteButton = createElement('button', 'Delete', ['btn', 'delete']);
       let archiveButton = createElement('button', 'Archive', ['btn', 'archive']);

       divButtonsElement.appendChild(deleteButton);
       divButtonsElement.appendChild(archiveButton);
       
       articleElement.appendChild(divButtonsElement);
       postsSectionElement.appendChild(articleElement);

       archiveButton.addEventListener('click', archivePost);
       deleteButton.addEventListener('click', deletePost);

       authorElement.value = '';
       titleElement.value = '';
       contentElement.value = '';
       categoryElement.value = '';
    }

    function archivePost(e){
       let clickedButton = e.currentTarget;
       let parentOfButton = clickedButton.parentElement;
       let titleElement = parentOfButton.previousSibling.previousSibling.previousSibling.previousSibling;
       let articleElement = parentOfButton.previousSibling.previousSibling.previousSibling.previousSibling.parentElement;

      //add title to title array
      titles.push(titleElement.textContent);
      titles.sort((a, b) => a.localeCompare(b));
      console.log(titles);

       let olSection = document.querySelectorAll('.archive-section')[0].querySelector('ol');
       olSection.innerHTML = '';

       for(let index = 0; index < titles.length; index++){
         let liElement = createElement('li', titles[index]);
         olSection.appendChild(liElement);
       }

      articleElement.remove();
    }

    function deletePost(e){
      let clickedButton = e.currentTarget;
      let parentOfButton = clickedButton.parentElement;
       let titleElement = parentOfButton.previousSibling.previousSibling.previousSibling.previousSibling;
       let articleElement = parentOfButton.previousSibling.previousSibling.previousSibling.previousSibling.parentElement;
       
      articleElement.remove();
    }

    function createElement(tagName, content, classNamesArray){
       let element = document.createElement(tagName);
       element.textContent = content;
       if(classNamesArray){
          for(let index = 0; index < classNamesArray.length; index++){
             element.classList.add(classNamesArray[index]);
          }
       }
       return element;
    }
  }
