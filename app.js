// app.js
// nicolas roldos
// February 2017


// pixel-container 'div'
let body = document.getElementsByTagName('body')[0]
let pxCanvas = document.createElement('div')
pxCanvas.className = 'pxCanvas'
body.appendChild(pxCanvas)


function createPixelGrid() {
  for (var i = 0; i < 1024; i++) {
    var pixelDiv = document.createElement('div')
    pxCanvas.appendChild(pixelDiv)
    pixelDiv.className = 'pixel'
  }
}
createPixelGrid()

// function create general-div //
// function createGenDiv(classNm) {
// let classNm = document.createElement('div');
// classNm.className = ''+ classNm +''
// return classNm;
// }

let red = document.createElement('div');
red.className = 'red';
let blue = document.createElement('div');
blue.className = 'blue'
let green = document.createElement('div');
green.className = 'green'
let black = document.createElement('div');
black.className = 'black'
let yellow = document.createElement('div');
yellow.className = 'yellow'
let pink = document.createElement('div');
pink.className = 'pink'
let white = document.createElement('div');
white.className = 'white'
let cyan = document.createElement('div');
cyan.className = 'cyan'
let magenta = document.createElement('div');
magenta.className = 'magenta'
let purple = document.createElement('div');
purple.className = 'purple'
let grey = document.createElement('div');
grey.className = 'grey'
let aquamarine = document.createElement('div')
aquamarine.className = 'aquamarine'

// container for colors called 'palette' //
let palette = document.createElement('div');
palette.className = 'palette'
body.appendChild(palette)

// array of colors in palette //
let colorDivs = [yellow, cyan, magenta, aquamarine, grey, white, blue, red, pink, black, purple, green];

let colorNames = ['yellow', 'cyan', 'magenta', 'aquamarine', 'grey', 'white', 'blue', 'red', 'pink', 'black', 'purple', 'green'];




// for-loop appends 'colordivs' to parent-node and container 'palette'
for (var i = 0; i < colorDivs.length; i++) {
  var cDiv = colorDivs[i]
  cDiv.className += ' color'
  cDiv.style.backgroundColor = cDiv.classList[0]
  palette.appendChild(cDiv)
}




// current-color 'default' 'background-color' for 'click' event //
// var 'held' will be changed to 'true' if a 'mousedown' event
// returns 'true'
// ...changing the backgroundColor style-property on the event 'mouseover' //  target
// in this case the pixel that is 'mous-ed' over...
var currentColor = 'black'
var held = false;



// EVENT LISTENER //
pxCanvas.addEventListener('click', function(e) {
  if (e.target.className !== 'pxCanvas') {
      e.target.style.backgroundColor = currentColor;
      console.log(target.className);
  }
})
 pxCanvas.addEventListener('mouseover', function(e) {
   console.log(e);
   if(held) {
     if (e.target.className !== 'pxCanvas') {
         e.target.style.backgroundColor = currentColor;
      }
   }
 })
pxCanvas.addEventListener('mousedown', function(e) {
  held = true
})
pxCanvas.addEventListener('mouseup', function(e) {
  held = false

})


palette.addEventListener('click', function(e) {
  if (e.target.className !== 'palette') {
    // if (e.target.className !== ) {
    //
    // }
    //
    // e.target.style.border = 'dashed black 0.5px';
    // e.target.style.border = 'solid black 0.5px';
    currentColor = e.target.style.backgroundColor;
    console.log(currentColor);
  }
})
