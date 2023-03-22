Link to code: https://editor.p5js.org/joseph.mccabe/sketches/NNeZR0-cz

Code:

function setup() {
  createCanvas(400, 400);
  JasonX = -75;
  JasonY = -280;

  KnifeY = random(370);
  KnifeX = random(370);
  notCollided = true;
}

function draw() {
  background(220);
  addKnife(KnifeX, KnifeY);
  addJason(JasonX, JasonY);
    if (dist(JasonX, JasonY, KnifeX, KnifeY) < 40){
    drawKnife(KnifeX, KnifeY)
    notCollided = false;
  }
}
function addJason(JasonX, JasonY) {
  push();
  translate(JasonX, JasonY);
  fill("#388EFF");

  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";

  fill("slateGrey");
  noFill();
  fill("Wheat");
  ellipse(110, 320, 70, 80);
  fill("white");
  ellipse(100, 310, 10, 10);
  ellipse(120, 310, 10, 10);
  noFill();
  ellipse(95, 323, 2, 2);
  ellipse(90, 329, 2, 2);
  ellipse(88, 320, 2, 2);
  ellipse(128, 329, 2, 2);
  ellipse(133, 320, 2, 2);
  ellipse(125, 323, 2, 2);
  fill("red");
  triangle(110, 303, 96, 290, 125, 290);
  noFill();
  ellipse(110, 325, 2, 2);
  ellipse(103, 335, 2, 2);
  ellipse(117, 335, 2, 2);
  ellipse(119, 343, 2, 2);
  ellipse(101, 343, 2, 2);
  ellipse(101, 350, 2, 2);
  ellipse(119, 350, 2, 2);
  ellipse(126, 338, 2, 2);
  ellipse(131, 344, 2, 2);
  ellipse(94, 338, 2, 2);
  ellipse(89, 344, 2, 2);
  pop();
}

function addKnife(KnifeX, KnifeY) {
  push();
  translate(KnifeX, KnifeY)
  fill("slategrey");
  rect(100, 60, 12, 30);
  fill("red");
  rect(90, 90, 32, 10);
  rect(100, 100, 12, 15);
  pop();

}
function keyPressed() {
  if (keyCode == UP_ARROW) {
    JasonY -= 5;
  }
  if (keyCode == DOWN_ARROW) {
    JasonY += 5;
  }

  if (keyCode == RIGHT_ARROW) {
    JasonX += 5;
  }
  if (keyCode == LEFT_ARROW) {
    JasonX -= 5;
  }
}
