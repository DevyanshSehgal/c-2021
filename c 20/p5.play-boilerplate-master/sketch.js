var aarow,bow
function setup() {
  createCanvas(800,400);
 aarow=createSprite(400, 200, 50, 50);
 bow=createSprite(500,200,50,50);
 aarow.velocityX=5
 bow.velocityX=5
 aarow.velocityY=5
 bow.velocityY=5
}

function draw() {
  background("yellow");
  bow.x=mouseX  
  bow.y=mouseY
  

  drawSprites();
//calling function 
if (whitehat()){
  bow.shapeColor="red"
  aarow.shapeColor="pink"
}else{
  bow.shapeColor="gray"
  aarow.shapeColor="gray"
}
bounceeeee()
}
