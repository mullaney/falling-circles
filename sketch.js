let circles = [];

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
		circles[j].move();
		if(circles[j].y - circles[j].r > height) {
			circles[j].respawn();
		}
	}
}
