const body = document.querySelector('body')
const button = document.querySelector('.btn')
const colors = ['deepPink', 'aquamarine', 'goldenrod', 'dodgerBlue', 'violet', 'tomato', 'lime']

button.addEventListener('click', changeColor)

function changeColor() {
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
}