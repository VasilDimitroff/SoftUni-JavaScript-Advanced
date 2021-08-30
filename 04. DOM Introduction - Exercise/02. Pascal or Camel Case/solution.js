function solve() {
  let text = document.querySelector('#text').value;
  let textAsArray = text.split(' ');
  let caseType = document.querySelector('#naming-convention').value;

  let firstLetter = '';
    if (caseType !== 'Camel Case' && caseType !== 'Pascal Case') {
      let resultEl = document.querySelector('#result');
      resultEl.textContent = 'Error!';
      return;
    } else if (caseType === 'Camel Case') {
      let firstLetter = textAsArray[0][0].toLowerCase();
      let moreOfWord = (textAsArray[0].slice(1, textAsArray[0].length)).toLowerCase();
      textAsArray[0] = firstLetter + moreOfWord;
    } else {
      let firstLetter = textAsArray[0][0].toUpperCase();
      let moreOfWord = (textAsArray[0].slice(1, textAsArray[0].length)).toLowerCase();
      textAsArray[0] = firstLetter + moreOfWord;
    }

    for (let index = 1; index < textAsArray.length; index++) {
      let currentWordInArray = textAsArray[index];
      let firstLetterOfWord = currentWordInArray[0].toUpperCase();
      let lastPartOfWord = (textAsArray[index].slice(1, textAsArray[index].length)).toLowerCase();
      let final = firstLetterOfWord + lastPartOfWord;
      textAsArray[index] = final;
    }

    let resultEl = document.querySelector('#result');
    resultEl.textContent = textAsArray.join('');
}