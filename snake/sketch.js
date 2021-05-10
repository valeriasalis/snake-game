var s;
//We want to keep track of the snake path 
//In fact, we can imagine the canvas as a grid and the snake goes up and down, left and right
//inside that grid
var scl = 20;
var food;
function setup() {
  // put setup code here - p5 requires two basic functions: setup() and draw()
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);  //we slow the frame rate so it becomes similar to the old Snake game display
  alert('Prima di cominciare leggi le istruzioni qui sotto. \nPer cominciare poi premi INVIO!');  //first time you open the fame it gives you the time to prepare yourself
  pickLocation();
}

//first the food was not exactly in location within the grid
function pickLocation() {
  var cols = floor(width / scl); //number of columns -> width of the window divided by the scale
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);  //Multiply the p5.Env's output amplitude by a fixed value. Calling this method again will override the initial mult() with new values. (p5js Snippets)
}

function draw() {
  // put drawing code here
  background(51);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

//In Snake game the cursor changes direction if we press arrow down (it goes down), arrow left (it goes left), etc 
function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1); // -1 is like "go up"
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}

