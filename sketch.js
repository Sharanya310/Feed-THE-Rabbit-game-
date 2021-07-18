var garden,rabbit;
var gardenImg,rabbitImg;
var leaf , leafImg , leafGroup ; 
var apple, appleGroup, appleImage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");

}

function setup(){
  

  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleGroup = new Group();
leafGroup = new Group();

}


function draw() {
  background(0);
   
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  
  if (rabbit.isTouching(appleGroup)){
    apple.destroy();
  }

  if (rabbit.isTouching(leafGroup)){
    leaf.destroy();
  }
  
  spawnApples();
  spawnleaves();
  drawSprites();
}




function spawnApples() {
  if (frameCount % 60 === 0) {
    apple = createSprite(600,100,40,10);
    apple.x = Math.round(random(10,400));
    apple.addImage(appleImg);
    apple.scale = 0.07;
    apple.velocityY = 5;

    apple.lifetime = 150

    appleGroup.add(apple);
  }
  
}


function spawnleaves () {
  if (frameCount % 70 === 0) {
    leaf= createSprite(600,100,40,10);
    leaf.x = Math.round(random(10,400));
    leaf.addImage(leafImg);
    leaf.scale = 0.05;
    leaf.velocityY = 4;

    leaf.lifetime = 150

    leafGroup.add(leaf)
  }
  
}



 







