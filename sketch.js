var stickman, stickmanImage;


function preload(){
stickmanImage=loadAnimation("Images/Stickman_Run_1.png", "Images/Stickman_Run_2.png", "Images/Stickman_Run_3.png", "Images/Stickman_Run_4.png",
 "Images/Stickman_Run_5.png", "Images/Stickman_Run_6.png", "Images/Stickman_Run_7.png", "Images/Stickman_Run_8.png");
}

function setup() {
  createCanvas(1600,400);
  stickman = createSprite(100,200,10,20);
  stickman.addAnimation("stickman", stickmanImage);
  

}

function draw() {
  background(255,255,255);  

  

  drawSprites();
}