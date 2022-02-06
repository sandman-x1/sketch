const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 32

let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

const grid = document.querySelector('.grid')
const clearButton = document.getElementById('clearButton')
const colorButton = document.getElementById('colorButton')
const eraseButton = document.getElementById('eraseButton')
const rainbowButton = document.getElementById('rainbowButton')
const sizeSlider = document.getElementById('sizeSlider')
const sizeTxt = document.getElementById('sizeTxt')

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

clearButton.onclick = () => resetGrid()
colorButton.onclick = () => setMode('color')
eraseButton.onclick = () => setMode('erase')
rainbowButton.onclick = () => setMode('rainbow')
sizeSlider.onmousemove = (e) => newSize(e.target.value)
sizeSlider.onmouseup = () => changeSize(currentSize)

function newSize(value) {
    if (value === '1') {
        currentSize = 16
    } else if (value === '2') {
        currentSize = 32
    } else if (value === '3') {
        currentSize = 64
    } else if (value = '4') {
        currentSize = 96
    }
    sizeTxt.textContent = `Size: ${currentSize} x ${currentSize}`
}

function changeSize(value) {
    clearGrid()
    createGrid(value)
}

function setMode(newMode) {
    changeButton(newMode)
    currentMode = newMode
}

function changeButton(newMode) {
    if (currentMode === 'color') {
        colorButton.classList.remove('active')
    } else if (currentMode === 'erase') {
        eraseButton.classList.remove('active')
    } else if (currentMode === 'rainbow') {
        rainbowButton.classList.remove('active')
    }

    if (newMode === 'color') {
        colorButton.classList.add('active')
    } else if (newMode === 'erase') {
        eraseButton.classList.add('active')
    } else if (newMode === 'rainbow') {
        rainbowButton.classList.add('active')
    }
}

function clearGrid() {
    grid.innerHTML = ''
}

function resetGrid() {
    clearGrid()
    createGrid(currentSize)
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
        e.target.style.backgroundColor = '#323232'
    } else if (currentMode === 'erase') {
        e.target.style.backgroundColor = '#fafafa'
    } else if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
}

createGrid(currentSize)