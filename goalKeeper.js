class GoalKeeper {
  constructor(posX, posY,x1,y1,x2,y2) {
    this.pos = createVector(posX, posY);
    this.color = "blue";
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  show() {
    stroke(this.color);
    strokeWeight(4);
    noFill();
    circle(this.pos.x, this.pos.y, 20);
  }

  switchCharge() {
    if (this.color == "red") this.color = "blue";
    else this.color = "red";
  }

  currCharge() {
    if (this.color == "blue") return 1;
    else return 0;
  }

  move(x, y) {
    let direction = createVector(x, y);
    direction.mult(2);
    this.pos.add(direction);
    this.pos.x = constrain(this.pos.x, this.x1, this.x2);
    this.pos.y = constrain(this.pos.y, this.y1, this.y2);
  }
}
