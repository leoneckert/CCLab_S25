let kick;
let speedX = 4;
let x = 200;

let interactedByClicking = false; // sound can only play after an interaction

function preload(){
  kick = loadSound("assets/sounds/kick.mp3")
}



function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(220, 20, 130);
  fill(0)
  circle(x, 200, 40);

  if(interactedByClicking == true){
    x+=speedX;
    if(x>width-20 || x < 20){
      speedX = -speedX;
      kick.play();
    }
  }else{
    textSize(20)
    text("click to start", 20, 430)
    text("(sound only works after the page as been interacted with (clicked) at least once)", 20, 450)
  }
  
}

function mousePressed(){
  interactedByClicking = true
}

