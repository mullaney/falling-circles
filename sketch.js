let circles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for(var i = 0; i < 500; i++) {
		var x = random(width);
		var y = random(height);
		var r = random(5, 40);
		circles.push(new Circle(x, y, r));
	}
	for(var j = 0; j < circles.length; j++) {
		circles[j].show();
	}
}

function draw() {

}


function Circle(x, y, r) {
	this.x = x;
	this.y = y;
	this.r = r;

	this.show = () => {
		fill(0,255,255,110);
    noStroke();
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}
}
