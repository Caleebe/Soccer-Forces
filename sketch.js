let game;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  game = new Game(width, height);
  game.setup();
}

function draw() {
  background(51);
  game.draw();
  game.controls(false, 0);
}

function keyPressed() {
  game.controls(true, keyCode);
}
