window.addEventListener('load', solution);

function solution() {
  //fname, email, phone, address, code, editBTN,  continueBTN
  let targetInputs = document.querySelectorAll('input');
  let fullNameElement = targetInputs[0];
  let emailElement = targetInputs[1];
  let phoneElement = targetInputs[2];
  let addressElement = targetInputs[3];
  let codeElement = targetInputs[4];
  let submitButton = targetInputs[5];
  let editBTN = targetInputs[6];
  let continueBTN = targetInputs[7];

  submitButton.addEventListener('click', addToPreview);

  let infoUlElement = document.querySelector('#infoPreview');

  let infoObj = {};

  function addToPreview(){

    if (!fullNameElement.value || !emailElement.value) {
      return;
    }

    infoObj.name = fullNameElement.value;
    infoObj.phone = phoneElement.value;
    infoObj.email = emailElement.value;
    infoObj.address = addressElement.value;
    infoObj.code = codeElement.value;

    let nameLiElement = createElement('li', 'Full Name: ' + fullNameElement.value);
    let emailLiElement = createElement('li', 'Email: ' + emailElement.value);

    infoUlElement.appendChild(nameLiElement);
    infoUlElement.appendChild(emailLiElement);

    if (phoneElement.value) {
      let phoneLiElement = createElement('li', 'Phone Number: ' + phoneElement.value);
      infoUlElement.appendChild(phoneLiElement);
    }
    
    if (addressElement.value) {
      let addressLiElement = createElement('li', 'Address: ' + addressElement.value);
      infoUlElement.appendChild(addressLiElement);
    }

    if (codeElement.value) {
      let codeLiElement = createElement('li', 'Postal Code: ' + codeElement.value);
      infoUlElement.appendChild(codeLiElement);
    }
    

    fullNameElement.value = '';
    phoneElement.value = '';
    emailElement.value = '';
    addressElement.value = '';
    codeElement.value = '';

    submitButton.setAttribute('disabled', '');
    editBTN.removeAttribute('disabled');
    continueBTN.removeAttribute('disabled');

    editBTN.addEventListener('click', editInfo);
    continueBTN.addEventListener('click', completeReservation);
  }

  function editInfo(e){
    fullNameElement.value = infoObj.name;
    phoneElement.value = infoObj.phone;
    emailElement.value = infoObj.email;
    addressElement.value = infoObj.address;
    codeElement.value = infoObj.code;

    let index = infoUlElement.children.length - 1;

    while (infoUlElement.children.length > 0) {
      let liToDelete = infoUlElement.children[index];
      liToDelete.remove();
      index--;
    }

    submitButton.removeAttribute('disabled');
    editBTN.setAttribute('disabled', '');
    continueBTN.setAttribute('disabled', '');
  }

  function completeReservation(){
    let divToDeleteChildren = document.querySelector('#block');

    let index = divToDeleteChildren.children.length - 1;

    while (divToDeleteChildren.children.length > 0) {
      let elToDelete = divToDeleteChildren.children[index];
      elToDelete.remove();
      index--;
    }

    let h3Element = createElement('h3', 'Thank you for your reservation!');
    divToDeleteChildren.appendChild(h3Element);
  }

  function createElement(element, content, className){
    let finalElement = document.createElement(element);
    finalElement.textContent = content;
      if (className) {
        finalElement.className.add(className);
      }

      return finalElement;
  }
}
