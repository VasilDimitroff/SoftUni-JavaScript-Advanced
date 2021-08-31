function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     let rowsElements = document.querySelector('tbody').children;

     let keyword = document.querySelector('#searchField').value;

     for (let index = 0; index < rowsElements.length; index++) {
      let element = rowsElements[index];
      element.classList.remove("select");
     }
    
    for (let index = 0; index < rowsElements.length; index++) {
       let element = rowsElements[index];
       let elementValue = element.textContent;
       if (elementValue.includes(keyword)) {
          element.classList.add("select");
       }    
    }

    document.querySelector('#searchField').value = '';
  }
}