let xArray = []
let yArray = [];


function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  for(let i = 0; i < 100; i++){
    let cx = random(width);
    let cy = random(height);
    xArray[i] = cx;
    yArray[i] = cy;
  }

  console.log(xArray)

}

function draw() {
  background(50, 120, 220);
  
  for(let i = 0; i < xArray.length; i++){
    circle(xArray[i], yArray[i], 10)
  }

}