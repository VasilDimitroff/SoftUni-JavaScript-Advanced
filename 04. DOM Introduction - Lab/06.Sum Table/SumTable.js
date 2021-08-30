function sumTable() {
    let rows = document.getElementsByTagName('tr');
    let sum = 0;

    for (let index = 1; index < rows.length; index++) {
        const cellContent = Number(rows[index].lastChild.textContent);
        sum += cellContent;
    }

    let sumElement = document.getElementById('sum');
    sumElement.textContent = sum;
}