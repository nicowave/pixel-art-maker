// pixel.js (build & burn from app.js)
// nicolas roldos
// 2/12/2017
//



let body = document.getElementsByTagName('body')[0]
let pxCanvas = document.createElement('div')
pxCanvas.className = 'canvas'



var pxCanvasSize = 36;
var pixelSize = 20;


let currentColorDiv =  document.createElement('div')
currentColorDiv.className = 'current'


// define color-palette container <div>
let colorPalette = document.createElement('div')
colorPalette.className = 'palette'
