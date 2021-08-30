function search() {

   let keyword = document.querySelector('#searchText').value;

   let targetTowns = [];

   let allTowns = document.getElementsByTagName('li');

   for (let index = 0; index < allTowns.length; index++) {
      let town = allTowns[index];

      if (town.textContent.includes(keyword)) {
         //bold text inside li element
         allTowns[index].style.fontWeight = 'bold';

         //underline text inside li element
         allTowns[index] = allTowns[index].style.textDecoration = 'underline';

         //add town to results
         targetTowns.push(town);
      }   
   }

   let resultElement = document.querySelector('#result');
   let resultsNumber = targetTowns.length;
   resultElement.textContent += resultsNumber;
   resultElement.textContent += ' matches found';
}
