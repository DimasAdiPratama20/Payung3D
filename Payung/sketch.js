
function setup() {
  
  createCanvas(600, 400, WEBGL);
}

function draw() {
  
  background(200);

  
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  ambientLight(100);

  
  let moveX = sin(frameCount * 0.01) * 100;
  let moveY = cos(frameCount * 0.00) * 50;  

  
  translate(moveX, moveY, 0);

  
  push();
  fill(150, 100, 50);
  box(10, 100, 10); 
  pop();

  
  push();
  translate(0, -85, 0);
  rotateX(PI / 1); 
  fill(200, 50, 50);
  cone(100, 100); 
  pop();
  

}
