function create(words) {
   let exisitingDiv = document.querySelector('#content');

   for (let index = 0; index < words.length; index++) {
      const element = words[index];
      
      let divElement = document.createElement('div');
      divElement.addEventListener('click', displayParagraph);

      let pElement =  document.createElement('p');
      pElement.style.display = 'none';
      pElement.textContent = element;
      divElement.appendChild(pElement);

      exisitingDiv.appendChild(divElement);
   }
  
  function displayParagraph(e){
     let child = e.currentTarget.children[0];
     child.style.display = 'block';
  }
  
 };