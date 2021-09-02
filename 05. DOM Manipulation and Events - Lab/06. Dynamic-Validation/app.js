function validate() {
    let input = document.querySelector('#email');
    input.addEventListener('change', checkValidity)

    function checkValidity(e){
        if (!input.value.includes('@') || !input.value.includes('.') || !input.value.match(/[a-z]+/)) {
            input.classList.add('error');
        }

        else {
            input.classList.remove('error') || null;
           input.value = '';
        }
        
    }
}