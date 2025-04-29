let p = [];
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  p.push(new Poi())
}

function draw() {
  noCursor()
  background(0);

  for(let i = 0; i < 10; i++){
    p.push(new Poi()) 
  }
  for(let i = 0; i < p.length; i++){
    p[i].update();
    p[i].display();
  }

  for(let i = p.length-1; i >=0; i--){
    if(p[i].s > 2){
      p.splice(i,1)
    }
  }

  console.log(p.length)

}

class Poi{
  constructor(){
    this.s = 0.02
    this.a = random(360)
    this.originX = mouseX;
  }
  update(){
    this.s *= 1.04
    this.originX = lerp(this.originX, width/2, 0.02)
  }
  display(){
    push()
    translate(this.originX, height/2)
    rotate(radians(this.a))
    scale(this.s)

    noStroke();
    fill(200)
    circle(0, 200, 20)
    pop()
  }
}