var fixedRect,movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  movingRect=createSprite(400, 200, 80, 50);
  fixedRect.debug=true;
  movingRect.debug=true;
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  
}

function draw() {
  background(0);  
  console.log(movingRect.x-fixedRect.x)
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2 ){
    fixedRect.shapeColor="skyblue";
    movingRect.shapeColor="skyblue";
  }else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  drawSprites();
}