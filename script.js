const DEFAULT_MODE = 'color'

let currentMode = DEFAULT_MODE

const grid = document.querySelector('.grid')
const clearButton = document.getElementById('clearButton')
const colorButton = document.getElementById('colorButton')
const eraseButton = document.getElementById('eraseButton')

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

clearButton.onclick = () => resetGrid()
colorButton.onclick = () => setMode('color')
eraseButton.onclick = () => setMode('erase')

function setMode(newMode) {
    changeButton(newMode)
    currentMode = newMode
}

function changeButton(newMode) {
    if (currentMode === 'color') {
        colorButton.classList.remove('active')
    } else if (currentMode === 'erase') {
        eraseButton.classList.remove('active')
    }

    if (newMode === 'color') {
        colorButton.classList.add('active')
    } else if (newMode === 'erase') {
        eraseButton.classList.add('active')
    }
}

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
    if (currentMode === 'color') {
        e.target.style.backgroundColor = '#3b3b3b'
    } else if (currentMode === 'erase') {
        e.target.style.backgroundColor = '#fafafa'
    }
}

createGrid(32)