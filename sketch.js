var diam1=0; 

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(50,100,diam1,diam1); // center of canvas, 20px dia
  diam1=diam1+5;
  fill("#f30808"); // color of the ellipse
  ellipse(random(width),random(height),20,20);
  //The ellipse move over and over again
  textSize(20);
  textFont("Impact");
  textStyle(ITALIC);
  textAlign(CENTER)
  text("cool dude",40,40);
}
