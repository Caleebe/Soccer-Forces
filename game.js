class Game {
  constructor(w, h) {
    this.x1 = w * 0.15;
    this.y1 = h * 0.1;
    this.x2 = w * 0.85;
    this.y2 = h * 0.8;
    this.gp;
    this.ball;
  }

  setup() {
    this.gp = new GoalKeeper(
      (this.x2 + this.x1) / 4,
      (this.y2 + this.y1) / 2,
      this.x1,
      this.y1,
      this.x2,
      this.y2
    );
    this.ball = new Ball((this.x2 + this.x1) / 2, (this.y2 + this.y1) / 2);
  }

  draw() {
    this.ball.wallForceY(this.y1, 1);
    this.ball.wallForceY(this.y2, -1);
    this.ball.wallForceX(this.x1, 1);
    this.ball.wallForceX(this.x2, -1);
    this.ball.show(this.gp.pos, this.gp.currCharge());
    this.drawStadium();
    this.gp.show();
  }

  drawStadium() {
    stroke("white");
    strokeWeight(2);
    let halfWidth = (this.x1 + this.x2) / 2;
    line(halfWidth, this.y1, halfWidth, this.y2);
    rect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
  }

  controls(isKeyPressed, k) {
    if (isKeyPressed) {
      if (k === 32) {
        //space
        this.gp.switchCharge();
      }
    } else {
      if (keyIsDown(68)) {
        //D
        this.gp.move(1, 0);
      }
      if (keyIsDown(87)) {
        //W
        this.gp.move(0, -1);
      }
      if (keyIsDown(65)) {
        //A
        this.gp.move(-1, 0);
      }
      if (keyIsDown(83)) {
        //S
        this.gp.move(0, 1);
      }
    }
  }
}
