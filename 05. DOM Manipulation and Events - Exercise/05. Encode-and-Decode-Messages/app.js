function encodeAndDecodeMessages(){
    
    let buttons = document.querySelectorAll('button');
    let sendButton = buttons[0];
    let decodeButton = buttons[1];


    sendButton.addEventListener('click', encodeText);
    decodeButton.addEventListener('click', decodeText);
 
   let textAreas = document.querySelectorAll('textarea');
   let sendArea = textAreas[0];
   let recieverArea = textAreas[1];

   let encodedInput = '';
   let decodedInput = '';

   function encodeText(e){ 
    recieverArea.value = '';
    for (let index = 0; index < sendArea.value.length; index++) {
        let letter = sendArea.value[index];
        let code = sendArea.value.charCodeAt(index);
        let newCode = code + 1;
        letter = String.fromCharCode(newCode);
        encodedInput += letter; 
    }
    
    sendArea.value = '';
    recieverArea.value = encodedInput;
    decodedInput = '';
    encodedInput = '';
   }

   function decodeText(e){

    recieverArea.value = '';
    for (let index = 0; index < sendArea.value.length; index++) {
        let letter = sendArea.value[index];
        let code = sendArea.value.charCodeAt(index);
        let newCode = code + 1;
        letter = String.fromCharCode(newCode);
        encodedInput += letter; 
    }

    let encodedValue = encodedInput;  
    sendArea.value = '';
    recieverArea.value = encodedInput;
    decodedInput = '';

    for (let index = 0; index < encodedValue.length; index++) {
        let letter = encodedValue[index];
        let code = encodedValue.charCodeAt(index);
        let newCode = code - 1;
        letter = String.fromCharCode(newCode);
        decodedInput += letter; 
    }

    recieverArea.value = decodedInput;
  }
}