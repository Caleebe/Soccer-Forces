class Ball {
  constructor(posX, posY) {
    this.pos = createVector(posX, posY);
    this.vel = createVector(0.01, 0.01);
    this.acc = createVector();
  }

  show(t, c) {
    this.draw();
    this.force(t, c);
    this.update();
  }

  force(target, charge) {
    var force = p5.Vector.sub(target, this.pos);
    var d = force.mag();
    var strength = 1000 / (d * d);
    force.setMag(strength);

    if (charge === 0) {
      if (d < 20) {
        force.mult(-2);
      }
      this.acc.add(force);
    } else this.acc.sub(force);
  }

  wallForceY(target , mod) {
    var d = target - this.pos.y;
    var strength = 500 / (d * d);
    strength *= mod;
    this.acc.y += strength;
  }

  wallForceX(target , mod) {
    var d = target - this.pos.x;
    var strength = 500 / (d * d);
    strength *= mod;
    this.acc.x += strength;
  }

  draw() {
    stroke("blue");
    strokeWeight(10);
    point(this.pos.x, this.pos.y);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
}
