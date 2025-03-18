
let input;
let img ;


function preload() {
  img = loadImage('yard.png');
  
  
}

function setup() {
  
let h=600;
  let canvas = createCanvas(1100,600,WEBGL);
  canvas.parent('sketch-holder');
}

function draw() {
  background(255,255,255);
      
  orbitControl();
rotateZ(frameCount * 0.005);
  rotateX(frameCount * -0.005);
  rotateY(frameCount * 0.0082);
    push();
 noStroke();
  



      // Draw the image if loaded.

  
    ambientLight(250, 250, 250,250);
pointLight(225, 28, 20);
  box(259);
   texture(img);
 // Set the material

  box(300);

     specularMaterial(25, 25, 25)
  

  
  
}

