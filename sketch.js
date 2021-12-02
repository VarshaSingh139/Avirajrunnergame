var PLAY = 1;
var END = 0;
var gameState = PLAY;
var backgroundImg;
var boy, boy_running;
// var score=0;
// var cloudsGroup, cloudImage;
// var cloudsGroup, cloudImage;
// var obstaclesGroup, obstacle1, obstacle2, obstacle3;
// var gameOver, restart;




function preload(){
    backgroundImg = loadImage("BG.jpg");
    boy_running=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png")
//     cloudImage = loadImage("cloud.png");
  
//     obstacle1 = loadImage("obstacle1.png");
//     obstacle2 = loadImage("obstacle2.png");
//     obstacle3 = loadImage("obstacle3.png");

//     gameOverImg = loadImage("gameOver.png");
//     restartImg = loadImage("restart.png");
}

  function setup() {
    createCanvas(displayWidth,displayHeight)
    back = createSprite(width/2,height/2)
   back.addImage(backgroundImg)
   back.scale = 3;

   boy =createSprite(50,height-330,20,50);
   boy.addAnimation("running", boy_running);

//     gameOver = createSprite(width/2,height/2- 50);
//   gameOver.addImage(gameOverImg);
  
//   restart = createSprite(width/2,height/2);
//   restart.addImage(restartImg);
  
//   gameOver.scale = 0.5;
//   restart.scale = 0.1;

//   gameOver.visible = false;
//   restart.visible = false;

//   cloudsGroup = new Group();
//   obstaclesGroup = new Group();
  
//   score = 0;

}

function draw() {
    //trex.debug = true;
    background("white");
    back.velocityX=-7
   if(back.x<650){
       back.x=width/2;
   }

    // textSize(20);
    // fill("black")
    // text("Score: "+ score,30,50);
    drawSprites();
}