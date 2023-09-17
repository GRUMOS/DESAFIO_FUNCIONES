const block1 = document.querySelector('#alpha')
const block2 = document.querySelector('#beta')
const block3 = document.querySelector('#gamma')
const block4 = document.querySelector('#delta')
const boxKey = document.querySelector('#key')
const container = document.querySelector('#container')

function cambiarColor (block, color, borderColor) {
    block.style.border = `1px solid ${borderColor}`
    block.style.backgroundColor = color
}

function Measurements (elementoHtml, alto = '200px', ancho ='200px'){
  elementoHtml.style.height = alto
  elementoHtml.style.width = ancho
}
Measurements(block1)
cambiarColor(block1, 'blue')

// block 2
Measurements(block2)
cambiarColor(block2, 'red')

// block 3
Measurements(block3)
cambiarColor(block3, 'green')

// block 4
Measurements(block4)
cambiarColor(block4, 'yellow')

//BlockKey
Measurements(boxKey)
cambiarColor(boxKey, 'white', 'black')


// block.addEventListener('click' , function() {})
block1.addEventListener('click',() => {
    cambiarColor(block1, 'black')
})
block2.addEventListener('click',() => {
    cambiarColor(block2, 'black')
})
block3.addEventListener('click',() => {
    cambiarColor(block3, 'black')
})
block4.addEventListener('click',() => {
    cambiarColor(block4, 'black')
})

//DIV KEY 

// DIV KEY 3.3
const multiColor = (letra, block) => {
    if (letra === 'a') {
      cambiarColor(block, 'pink')
    }
    if (letra === 's') {
      cambiarColor(block, 'orange')
    }
    if (letra === 'd') {
      cambiarColor(block, 'skyblue')
    }
  }




  document.addEventListener('keydown', function (event) {
    multiColor(event.key, boxKey)
  })