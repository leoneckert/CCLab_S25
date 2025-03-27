let boat1;
let boat2;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  boat1 = new Boat(100, 300);
  boat2 = new Boat(300, 300);

  console.log(boat1)
}

function draw() {
  background(30, 50, 240);
  
  boat1.update();
  boat1.display();

  boat2.update();
  boat2.display();
}

class Boat{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.scaleFactor = 1;
  }
  update(){
    this.x += 0.5;
  }  
  display(){
    push();
    translate(this.x, this.y);
    scale(this.scaleFactor)

    noStroke();

    fill(20, 40, 90)
    arc(0, -20, 150, 90, 0, PI);

    // used to draw the sail here
    this.drawSail();

    fill("red");
    circle(0, 0, 5)
    pop();
  }
  drawSail(){
    push();
    translate(0, -50);
    fill(200, 120, 90)
    triangle(0, -30, 20, 0, 0, 30)

    fill("green");
    circle(0, 0, 5)
    pop();
  }

}