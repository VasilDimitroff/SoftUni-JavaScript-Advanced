function validate() {
    let validationRegex = /^[a-z]+@{1}[a-z]+\.[a-z]+$/;

   let usernameInput = document.querySelector('input');
   usernameInput.addEventListener('change', checkValidity);

   function checkValidity(){
       if(!validationRegex.test(usernameInput.value)){
            usernameInput.classList.add('error');
       } else {
           usernameInput.classList.remove('error');
       }
   }

}