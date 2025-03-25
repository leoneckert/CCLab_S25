let xArray = []
let yArray = [];


function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  for(let i = 0; i < 40; i++){
    let cx = random(width);
    let cy = random(height);
    // xArray[i] = cx;
    // yArray[i] = cy;
    xArray.push(cx);
    yArray.push(cy);
  }

  console.log(xArray)

}

function draw() {
  background(50, 120, 220);
  
  for(let i = 0; i < xArray.length; i++){
    xArray[i] += random(-1, 1)
    yArray[i] += random(-1, 1)
    circle(xArray[i], yArray[i], 10)
  }

}




function mousePressed(){
  xArray.push(mouseX);
  yArray.push(mouseY);
}