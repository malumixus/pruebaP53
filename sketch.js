let x = 0;
let y = 30;
let cuad = false;
function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

//autor richard paul lohse
function draw() {
  noStroke();

  translate(x, y);

  push();

  fill("#ff8178");
  rect(0, 0, 80, 170);
  fill("#ff3df4");
  rect(80, 0, 130, 170);
  pop();

  push();

  fill("#00adf7");
  rect(210, 0, 200, 170); //210

  fill("#00f8ff");
  rect(210, 0, 200, 80);
  pop();

  push();

  fill("#ffa841");
  rect(0, 170, 210, 290); //170

  fill("#ffe13a");
  rect(0, 330, 210, 70);

  pop();

  push();

  fill("#08b183");
  rect(210, 170, 210, 700);

  fill("#23ec63");
  rect(210, 170, 70, 700);
  pop();
  
 if (mouseIsPressed) {
    x++;
    for (let i = 40; i <=100; i++) {
      
        fill(random(0, 255), random(0, 255),         random(0, 255));
         rect(0, i,299, 900);
      translate(0,i);
    }
  }
  
  
}
