// let greetings1 = "Hallo";
// let greetings2 = "哈喽 你吃儿了";


//                  0             1           2             3                 4
let greetings = ["Hallo", "哈喽 你吃儿了吗", "Bonjour", "Annyeong-haseyo", "Zdravstvuite"];

let randomIndex;


function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  console.log(greetings)
  console.log(greetings.length)

  randomIndex = floor(random(0, greetings.length));

}

function draw() {
  background(10, 210, 230);

  // text(greetings[0], width/2, height/2 + 0)
  // text(greetings[1], width/2, height/2 + 12)
  // text(greetings[2], width/2, height/2 + 24)

  // for loop that loops 3 times! OLD
  // for loop that loops as many times as there are elements in the array
  
  // let randomIndex = floor(random(0, greetings.length));

  for(let i = 0; i < greetings.length; i++){
    // console.log(i)

    // coloring first and last element differently
    // if(i == 0){
    //   fill("red");
    // }else if(i == greetings.length-1){
    //   fill("blue")
    // }else{
    //   fill(0)
    // }

    //          turns to int   
    // let randomIndex = floor(random(0, greetings.length));
    if(i == randomIndex){
      fill("yellow")
    }else{
      fill("black")
    }

    let greeting =  greetings[i]  // note this is singular
    let y = height/2 + i * 12;
    text(greeting, width/2, y)

  }
  
}