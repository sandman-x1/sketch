const grid = document.querySelector('.grid')
const clearButton = document.getElementById('clearButton')
const colorButton = document.getElementById('colorButton')

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

clearButton.onclick = () => resetGrid()

function clearGrid() {
    grid.innerHTML = ''
}

function resetGrid() {
    clearGrid()
    createGrid(32)
}

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (i=0; i<size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        grid.appendChild(cell);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    else e.target.style.backgroundColor = '#3b3b3b'
}

createGrid(32)