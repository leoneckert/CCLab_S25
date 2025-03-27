// let x = 20; // step 1

let xArray = []; // step 2, 3


function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  
  for(let x = 20; x < width; x+=30){
    xArray.push(x)
  }
  console.log(xArray)
}

function draw() {
  background(220);

  // x += random(-0.5, 0.5); // step 1
  // rect(x, 200, 20, 20) // step 1


  for(let i = 0; i < xArray.length; i++){
    // let x = xArray[i];
    // rect(x, 200, 20, 20);

    xArray[i] += random(-0.5, 0.5);

    rect(xArray[i], 200, 20, 20);
    
  }

  console.log(xArray)

}