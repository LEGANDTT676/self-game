
var tank,tankImage;
var topWall,leftWall,rightWall,bottomWall;
var plane,planeImage;
var cannon,cannonImage;
function preload() {

  tankImage=loadImage("assests/tank.png");
  planeImage=loadImage("assests/plane.png");
  cannonImage=loadImage("assests/cannon.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);


  

  topWall=createSprite(width/2,5,width,5);
  leftWall=createSprite(5,height/2,5,height);
  rightWall=createSprite(width-5,height/2,5,height);
  bottomWall=createSprite(width/2,height-5,width,5);
}

function draw() {
  background("red");
  drawSprites();
  if (keyDown("w")) {
    jonas.y-=3
  } if (keyDown("a")) {
    jonas.x-=3
  } if (keyDown("s")) {
    jonas.y+=3
  } if (keyDown("d")) {
    jonas.x+=3
  }
//collsion();
var r=Math.round(random(1,3))
if (r===1) {
  tankDefender();
}
else if (r===2) {
  planeDefender();
}
else if (r===3) {
  cannonDefender();
}

}

 function collsion() {
  tank.collide(topWall);
  tank.collide(leftWall);
  tank.collide(rightWall);
  tank.collide(bottomWall);


 }
function tankDefender() {
  if (frameCount%70===0) {

  tank=createSprite(50,height-50,100,100);
  tank.addImage(tankImage);
  tank.scale=0.5;
  tank.velocityX=0.4;
}
}
function cannonDefender() {
  if (frameCount%70===0) {
  cannon=createSprite(50,height-50,100,100);
  cannon.addImage(cannonImage);
  cannon.scale=0.5;
  cannon.velocityX=0.3;
}
}
function planeDefender() {
  if (frameCount%70===0) {
  plane=createSprite(50,height-700,100,100);
  plane.addImage(planeImage);
  plane.scale=0.5;
  plane.velocityX=0.8;
}
}

function attack(params) {
  
}

