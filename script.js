const container = document.querySelector('.container')

function createGrid(num) {
    for (i=0; i<num; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

createGrid(256)