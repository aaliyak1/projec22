var mouseImg;
var cheeseImg;
var mouseImg;
var attic;

function preload(){
mouseImg = loadImage("mouse.jpeg");
atticImg = loadImage("attic.png");
cheeseImg = loadImage("cheese.png");


}

function setup() {
createCanvas(900, 700);
attic= createSprite(width/2, 200);
attic.addImage(atticImg);
attic.velocityX = -4;

mouse = createSprite(210, 150, 30, 30);
mouse.addImage(mouseImg);
mouse.scale = 0.3
mouse.velocityX = 2;

cheese = createSprite(100, 60, 20, 20);
cheese.addImage(cheeseImg);
cheese.scale = 0.09;

if (attic.x < 0 ) {
    attic.x = attic.width/2;
}


cheeseGroup = new Group ();
}

function draw() {
background(225); 

if (keyDown("UP_ARROW")) {
    mouse.velocityY = -12;

}
drawSprites();
}