let p;
let pinWheels = []
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  // p = new PinWheel(width/2, height/2)
  for(let i = 0; i < 40; i++){
    pinWheels.push(new PinWheel(random(width), random(height)))
  }
}

function draw() {
  background(90, 200, 150);

  // get scrolling percentage
  // how much have we scrolled  / entire scrolling space
  let alreadyScrolled = document.getElementById("scrollContainer").scrollTop;
  let entireScrollSpace = document.getElementById("scrollBox").scrollHeight - height;
  let scrollPercentage = alreadyScrolled/entireScrollSpace;
  fill(0)
  textSize(20)
  text(scrollPercentage, 20, 20);


  for(let i = 0; i < pinWheels.length; i++){
    pinWheels[i].angle = map(scrollPercentage, 0, 1, 0, 360*3)
    pinWheels[i].update();
    pinWheels[i].display();
  }
  

}

class PinWheel{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.angle = 10;
    this.scaleFactor = random(0.2, 1);
    this.radius = 100;

  }
  update(){

  }
  drawSingleWing(){
    fill(30, 90, 180)
    //SMALL triangle
    //       x1, y1      x2, y2                     x3, y3
    triangle(0,0,   0,-this.radius/2,   this.radius/2, -this.radius/2)

    fill(220, 150, 30)
    //BIG triangle
    triangle(0,0,  this.radius/2, -this.radius/2,  this.radius, 0)
  }
  display(){
    push();
    translate(this.x, this.y);
    scale(this.scaleFactor);

    strokeWeight(5)
    line(0, 0, 0, this.radius*2)


    noStroke();
    // PINWHEEL WITH 4 wings
    push();
    translate(0, 0);
    rotate(radians(-this.angle)) // pinwheel rotating as a whole
    for(let i = 0; i < 4; i++){
      rotate(radians(360/4)) // rotate each wing by 90deg from starting angle
      this.drawSingleWing() 
    }
    pop();
    


    fill("red");
    circle(0, 0, 5);
    pop();
  }
}