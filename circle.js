const minRad = 5;
const maxRad = 60;
const rate = 4;
const colors = [
	'#FF0000',
	'#00FF00',
	'#0000FF',
	'#FFFF00',
	'#FF00FF',
	'#00FFFF'
]

function Circle(x, y, r) {
	this.x = x || random(width);
	this.y = y || random(height);
	this.r = r || random(minRad, maxRad);
	this.alpha = 255 - (this.r / maxRad * 90) - 163;
	this.c = colors[floor(random(6))];

	this.show = () => {
		var c = color(this.c)
		c = changeAlpha(c, this.alpha);
		fill(c);
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

function changeAlpha(col, alp) {
	col._array[3] = alp / 255;
	return col;
}
