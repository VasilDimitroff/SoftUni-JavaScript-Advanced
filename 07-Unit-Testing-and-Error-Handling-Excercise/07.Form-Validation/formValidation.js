function validate() {
    let usernameInput = document.querySelector('#username');
    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');
    let confirmPasswordInput = document.querySelector('#confirm-password');

    let usernameRegex = /^[A-z0-9]{3,20}$/;
    let passwordRegex = /^[A-z0-9_]{5,15}$/;
    let emailRegex = /^[a-z]+@{1}[a-z\.]+$/;
}
