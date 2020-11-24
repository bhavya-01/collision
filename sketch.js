var moving, fixed;


function setup() {
  createCanvas(800,400);



  fixed = createSprite(600,400,50,80);
  fixed.shapeColor = "green";
  moving= createSprite(400, 200, 80, 50);
  moving.shapeColor = "green";

  

}

function draw() {
  background(255,255,255); 
  
  console.log(moving.x-fixed.x);

moving.x = World.mouseX;
moving.y = World.mouseY;


if(fixed.x-moving.x < fixed.width/2+moving.width/2 && moving.x - fixed.x < fixed.width/2+moving.width/2 && moving.y - fixed.y < fixed.width/2+moving.width/2 &&  fixed.y - moving.y < fixed.width/2+moving.width/2){
  moving.shapeColor = "red";
  fixed.shapeColor = "red";

}

  drawSprites();
}