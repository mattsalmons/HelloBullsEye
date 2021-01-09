function setup() {
  createCanvas(1440, 820);
  textAlign(CENTER, CENTER)
  rectMode(CENTER)
}

var counter = 20;

function draw() {
  background(1, 186, 240);

  var x = width / 2
  var y = height / 2

  var size = frameCount

  // circle 01
  fill(237, 34, 93);
  ellipse(x, y, size, size);

  // circle 02
  if (frameCount > 120) {
    fill(93, 34, 237);
    ellipse(x, y, size - 120, size - 120);
  }

  // circle 03
  if (frameCount > 240) {
    fill(255, 255, 0);
    ellipse(x, y, size - 240, size - 240);
  }

  // circle 04
  if (frameCount > 360) {
    fill(93, 237, 34);
    ellipse(x, y, size - 360, size - 360);
  }

  // text
  if (frameCount > 540) {

    fill(237, 34, 93);
    stroke(0)
    textSize(size - 540)
    text('hello.', x, y)
  }

}
