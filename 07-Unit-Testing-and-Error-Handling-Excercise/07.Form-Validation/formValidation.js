function validate() {
    let usernameInput = document.querySelector('#username');
    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');
    let confirmPasswordInput = document.querySelector('#confirm-password');
    let submit = document.querySelector('#submit');
    
    let isCompanyElement = document.querySelector('#company')
    isCompanyElement.addEventListener('change', showDiv);

    function showDiv(e){
       let companyInfo = document.querySelector('#companyInfo');
       if (e.target.checked === true) {
           companyInfo.style.display = 'block';
       } else {
           companyInfo.style.display = 'none';
       }
    }

    let usernameRegex = /^[A-z0-9]{3,20}$/;
    let passwordRegex = /^[A-z0-9_]{5,15}$/;
    let emailRegex = /^[a-z]+@{1}[a-z\.]+$/;

    submit.addEventListener('click', validateData);

    function validateData(e){
       e.preventDefault();

       let countValids = 0
        
        if (!usernameRegex.test(usernameInput.value)) {
            usernameInput.style.borderColor = 'red'
        }
        else {
            usernameInput.style.border = 'none';
            countValids++;
        }

        if (!emailRegex.test(emailInput.value)) {
            emailInput.style.borderColor = 'red'
        }
        else {
            emailInput.style.border = 'none';
            countValids++;
        }

        if (!passwordRegex.test(passwordInput.value)) {
            passwordInput.style.borderColor = 'red'
        }
        else {      
            countValids++;
        }

        if (!passwordRegex.test(confirmPasswordInput.value) || passwordInput.value != confirmPasswordInput.value) {
            
            confirmPasswordInput.style.borderColor = 'red';
            passwordInput.style.borderColor = 'red';
        }
        else {
            confirmPasswordInput.style.border = 'none';
            passwordInput.style.border = 'none';
            countValids++;
        }
        
        let isCompanyChecked = false;

        if (isCompanyElement.checked === true) {
            isCompanyChecked = true;

            let companyNumber = document.querySelector('#companyNumber');

            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = 'red'
            }
            else {
                companyNumber.style.border = 'none';
                countValids++
            }
        }
       
        let validDiv = document.querySelector('#valid');

        if (!isCompanyChecked) {
            if (countValids === 4) {
                validDiv.style.display = 'block';
            }      
        } else {
            if (countValids === 5) {
                validDiv.style.display = 'block';
            }     
        }      
    }
}
