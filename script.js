const container = document.querySelector('.container')
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (i=0; i<size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        container.appendChild(cell);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    else e.target.style.backgroundColor = '#3b3b3b'
}

createGrid(32)