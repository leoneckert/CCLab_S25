let mountains = [];

let b;
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");


  for(let i = 0; i < 10; i++){
    mountains.push(new Mountain(random(width), random(200, height/2)))
  }

  b = new Button(100, 100, 50, 20, "button", newMountains)
}

function newMountains(){
  mountains = []
  for(let i = 0; i < 10; i++){
    mountains.push(new Mountain(random(width), random(200, height/2)))
  }
}

function draw() {
  background(220);
  noStroke();
  fill(100, 110, 240)
  rect(0, 0, width, 170);
  fill(100, 240, 140)
  rect(0, 170, width, height);
  for(let i = 0; i < mountains.length; i++){
    mountains[i].display()
  }


  textSize(80);
  textAlign(CENTER);
  fill("red")
  text("project b v1 😓", width/2, height/2)

  b.display();
}


class Mountain{
  constructor(sX, sY){
    this.x = sX;
    this.y = sY;

    this.grey = random(100, 200);
    this.h = random(40, 80);

    this.peaks = [];
    let numPeaks = floor(random(1, 5));
    for(let i = 0; i < numPeaks; i++){
      let px = random(-30, 30);
      let py = random(0, -20);
      let ph = this.h + random(-20, 20);

      let pbw = random(15, 30)
     this.peaks.push([px-pbw, py, px, py-this.h, px+pbw, py])

    }

  }
  display(){
    push();
    translate(this.x, this.y);


    // triangle(-20, 0, 0, -this.h, 20, 0)
    noStroke();
    fill(this.grey)
    for(let i = 0; i < this.peaks.length; i++){
      triangle(this.peaks[i][0], this.peaks[i][1], this.peaks[i][2], this.peaks[i][3], this.peaks[i][4], this.peaks[i][5])
    }

    fill("red");
    // circle(0, 0, 5)
    pop();
  }
}


class Button{
  constructor(x,y,w,h,t, callbackFunction){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
    this.whatHappensOnClick = callbackFunction
  }
  update(){

  }
  display(){
    push();
    translate(this.x, this.y);
    fill(220)
    if(this.mouseOver() == true){
      fill(180)
      
    }
    rect(0, 0, this.w, this.h);

    textSize(12)
    fill(0)
    
    text(this.t, this.w/2, this.h/2+6);

    pop();
  }
  mouseOver(){
    return mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y+this.h

  }
  checkIfClicked(){
    if(this.mouseOver() == true){
      //clicked
      console.log("clicked")
      this.whatHappensOnClick()
    }
  }


}

function mousePressed(){
  b.checkIfClicked();
}