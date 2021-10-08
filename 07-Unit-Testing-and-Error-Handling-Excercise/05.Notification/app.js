function notify(message) {

  let button = document.querySelector('button');

  let messageDiv = document.querySelector('#notification'); 
  messageDiv.textContent = message;

  messageDiv.style.display = 'block';
  messageDiv.addEventListener('click', hideMessage);

  function hideMessage(e){
    let div = e.currentTarget;
    if(div.style.display == 'block'){
      div.style.display = 'none';
    }
  } 
}