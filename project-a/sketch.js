function setup() {
    // line below in web editor:
    // createCanvas(800, 500);
   
    // lines below in vs code:
    let canvas = createCanvas(800, 500);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");
    
  }
  
  function draw() {
    background(100, 50, 230);
    
    // i made\change
    
    
    push();
    translate(200, 200-sin(radians(frameCount+0)*10)*5);
    for(let i = 0; i < 40; i++){
      let x = i;
      let y = sin(radians(frameCount+i)*10)*5
      fill('pink')
      circle(x, y, 3);
    }
    pop();
    fill(0)
    fill('pink')
    circle(200-20-20, 200-20, 20)
    ellipse(200-20, 200, 40, 30)
    
  }