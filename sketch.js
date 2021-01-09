var movingrect;
var fixedrect;


function setup() {
  createCanvas(1200,800);
 
  movingrect = createSprite(400, 200, 80, 30);
  fixedrect = createSprite(200, 200, 50, 80);

  movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";

  movingrect.debug = true;
  fixedrect.debug = true;
}

function draw() {
  background(0);  
  
  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;
  
  console.log(movingrect.x - fixedrect.x);
  
if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
  fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
  movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 && 
  fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2){
  
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
}
else{
movingrect.shapeColor = "red";
fixedrect.shapeColor = "red";
}

  drawSprites();
}