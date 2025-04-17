let myData;
let k;

let points = []

// Load the JSON and create an object.
function preload() {
  myData = loadJSON('coordinates.json');
  
}

function setup() {
  let canvas = createCanvas(1000, 1000);
  canvas.parent("p5-canvas-container");
  k = Object.keys(myData);

}

function draw() {
  background(0);
    if(frameCount%5==00 && points.length < k.length){
      let i = points.length;
      points.push(new Point(myData[i].x, myData[i].y, points))
    }
  
    for(let i = 0; i < points.length; i++){

    points[i].display()
  }
}

function mousePressed(){
  let i = points.length;
  points.push(new Point(myData[i].x, myData[i].y, points))
}


class Point {
  constructor(x, y, points) {
    this.goalx = x;
    this.goaly = y;
    // Find the closest point
    this.closest = points.reduce((closestSoFar, currentPoint) => {
      if (currentPoint === this) return closestSoFar;
      let currentDist = dist(this.goalx, this.goaly, currentPoint.goalx, currentPoint.goaly);
      if (!closestSoFar || currentDist < closestSoFar.dist) {
        return { point: currentPoint, dist: currentDist };
      } else {
        return closestSoFar;
      }
    }, null);
    
    if (this.closest) {
    this.x = this.closest.point.goalx;
    this.y = this.closest.point.goaly;
    }else{
      this.x = this.goalx
      this.y = this.goaly
    }



    this.fc = frameCount;
    this.size = 10;

  }

  display(points) {
    console.log(this.closest)
    this.x = lerp(this.x, this.goalx, 0.1);
    this.y = lerp(this.y, this.goaly, 0.1);
    fill(0);
    this.size = constrain(map(frameCount-this.fc, 0, 200, 4, 1.5),1.5, 10);
    
    
    if (this.closest) {
      stroke(240);
      line(this.x, this.y, this.closest.point.x, this.closest.point.y);
    }

    fill("yellow")
    noStroke()
    circle(this.x, this.y, this.size);

    
  }
}