let circles = [];
const minRad = 5;
const maxRad = 60;
const rate = 4;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for(var i = 0; i < width * height / 3000; i++) {
		circles.push(new Circle());
	}
}

function draw() {
	background(255);
	textSize(width/10);
	fill(0,0,0,63);
	textFont('Annie Use Your Telescope');
	text("kvinklly.com", 100, 200);
	for(var j = 0; j < circles.length; j++) {
		circles[j].show();
		circles[j].y += rate - (circles[j].r / maxRad * rate * 0.75);
		if(circles[j].y - circles[j].r > height) {
			circles[j].x = random(width);
			circles[j].y = 0 - circles[j].r;
		}
	}
}


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
}
