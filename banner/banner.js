function preload() {
	pref = loadFont('assets/IBMPlexSans-Regular.otf');
}
function setup() {
	var canvas = createCanvas(500, 200);
	canvas.parent("welcome")
}

var pausecolor = 0;
var reverse = false;

//// dots
var dotcount = 0
var dots = [];

// dot constructor
function Dot(gval) {
	this.r = gval;
	this.g = (215/2)*sin(mouseY/100)+(215) % 255;
	//this.xpos = random(10, 490);
	//this.ypos = random(10, 190);
	this.xpos = randomGaussian(250, 50)
	this.ypos = randomGaussian(100, 20)
	this.alpha = 0;
	this.display = function() {
		if (this.alpha < 70) {
			this.alpha += 3
		}
		strokeWeight(0);
		fill(this.r, this.g, 240, this.alpha);
		ellipse(this.xpos,
						this.ypos,
						15, 15);

	}
}


function draw() {

	background(255, 255, 255); // change this back to white when finished

	// default framerate is 60fps
	if (frameCount % 40 == 0 & dots.length < 300) {
		// add a dot
		dots.push(new Dot(pausecolor));
		dotcount += 1;
	}

	for (var i = 0; i < dots.length; i++) {
		dots[i].display();
	}

	textFont(pref);
	textSize(64);
	fill((215/2)*sin(mouseY/100)+(215), 54, 87);
	textAlign(CENTER);
	text('emily mo', 250, 105);
	fill(pausecolor, (215/2)*sin(mouseY/100)+(215), 240);
	text('emily mo', 253, 105);

}

function mouseMoved () {
	var x = mouseX;
	var y = mouseY;
	var speed = abs(x-pmouseX) + abs(y-pmouseY);


	if (pausecolor == 200) {
		reverse = true
	}
	if (pausecolor == 0) {
		reverse = false
	}
	if (reverse == true) {
		pausecolor = pausecolor - 4
	}
	else if (reverse == false) {
		pausecolor = pausecolor + 4
	}

}
