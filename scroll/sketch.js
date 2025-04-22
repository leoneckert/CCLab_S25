function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  
}

function draw() {
  background(0);

  // how much have we scrolled in percent?
  // the math is: 
  // (how much have we scrolled) / (how tall is the scrolling box - height of the canvas)
  let scrollPercent = document.getElementById("scrollContainer").scrollTop / (document.getElementById("scrollContainer").scrollHeight - height);
  console.log(scrollPercent);
  fill(255)
  textSize(20)
  text("You scrolled " + round(scrollPercent*100) + "% of the way.", 50, 100)
  
  
  let angle = map(scrollPercent, 0 ,1, 0, 360);
  push();
  translate(width/2, height/2);
  rotate(radians(angle))
  rect(-50, -50, 100, 100)
  pop();

  
}


function mousePressed(){
  circle(mouseX, mouseY, 10)
}