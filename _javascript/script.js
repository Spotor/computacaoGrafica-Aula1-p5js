function setup() {
    createCanvas(windowWidth, windowHeight);
}
  
  function draw() {
      fill(255,255,0)
      ellipse(width/2, height/2, width/2, height/1.05);
      fill(0,0,0)
      ellipse(width/2.40, 220, 115, 200);
      fill(0,0,0)
      ellipse(width/1.75, 220, 115, 200);
      noFill();
      arc(width/2, 430, 250, 120, 0, PI);
}