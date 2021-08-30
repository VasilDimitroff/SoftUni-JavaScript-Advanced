function toggle() {

    let buttonElement = document.querySelectorAll('.button')[0];
    let contentElement = document.querySelector('#extra');

    if (contentElement.style.display === '' || contentElement.style.display === 'none') {
        contentElement.style.display = 'block';
        buttonElement.textContent = 'Less'
    } else{
        contentElement.style.display = 'none';
        buttonElement.textContent = 'More'
    }
}