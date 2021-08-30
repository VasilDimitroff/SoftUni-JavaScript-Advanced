function colorize() {
    let rows = document.getElementsByTagName('tr');
    
    for (let index = 0; index < rows.length; index++) {
        const element = rows[index];

        if (index % 2 != 0) {
            element.style.backgroundColor = 'Teal';
        }   
    }
}