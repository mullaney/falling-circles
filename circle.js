const minRad = 5;
const maxRad = 60;
const rate = 4;

function Circle(x, y, r) {
	this.x = x || random(width);
	this.y = y || random(height);
	this.r = r || random(minRad, maxRad);
	this.alpha = 255 - (this.r / maxRad * 90) - 163;

	this.show = () => {
		fill(0,255,255,this.alpha);
    noStroke();
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}

  this.move = () => {
    this.y += rate - (this.r / maxRad * rate * 0.75);
  }

  this.respawn = () => {
    this.x = random(width);
    this.y = 0 - this.r;
  }
}
