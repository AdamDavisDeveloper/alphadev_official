function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  one = createGraphics(300, 300);
  two = createGraphics(300, 300);
  three = createGraphics(300, 300);
  four = createGraphics(300, 300);
  five = createGraphics(300, 300);
  six = createGraphics(300, 300);
}

function draw() {
  background(0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  //sides
  one.clear();
  one.background(150, 0, 0);
  one.fill(255);
  one.textAlign(CENTER);
  one.textSize(64);
  one.text("one", 150, 150);

  two.clear();
  two.background(95, 15, 255);
  two.fill(255);
  two.textAlign(CENTER);
  two.textSize(64);
  two.text("two", 150, 150);

  three.clear();
  three.background(0, 181, 102);
  three.fill(255);
  three.textAlign(CENTER);
  three.textSize(64);
  three.text("three", 150, 150);

  four.clear();
  four.background(80, 130, 181);
  four.fill(255);
  four.textAlign(CENTER);
  four.textSize(64);
  four.text("four", 150, 150);

  five.clear();
  five.background(163, 6, 111);
  five.fill(255);
  five.textAlign(CENTER);
  five.textSize(64);
  five.text("five", 150, 150);

  six.clear();
  six.background(209, 203, 27);
  six.fill(255);
  six.textAlign(CENTER);
  six.textSize(64);
  six.text("six", 150, 150);

  //panes
  texture(one);
  translate(0, 0, 100);
  box(100, 100, 0);
  translate(0, 0, -100);

  texture(two);
  translate(0, 0, -100);
  box(100, 100, 0);
  translate(0, 0, 100);

  texture(three);
  translate(0, 100, 0);
  box(100, 0, 100);
  translate(0, -100, 0);

  texture(four);
  translate(0, -100, 0);
  box(100, 0, 100);
  translate(0, 100, 0);

  texture(five);
  translate(100, 0, 0);
  box(0, 100, 100);
  translate(-100, 0, 0);

  texture(six);
  translate(-100, 0, 0);
  box(0, 100, 100);
  translate(100, 0, 0);
}
