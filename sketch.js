var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var positionX = 0;
var database;
var finishedPlayers,finishPass;
var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;
var obstacleGroup;
var obstacle1,obstacle2,obstacle3,obstacle4;
var ob1,ob2,ob3,ob4,ob5,ob6,ob7,ob8,ob9,ob10,ob11,ob12,ob13,ob14,ob15,ob16;
var moveUp ,moveRight ,moveLeft;
var moveUp_img, moveRight_img, moveLeft_img;
var bulletUp,  bulletLeft , bulletRight;
var bulletUp_img, bulletLeft_img, bulletRight_img;
var coins = 0;
var coinImage;
var coin,coinGrp;
var back_img;
var booster , boosterGrp , booster_img;

var bronze_img,gold_img,silver_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
  obstacle1 = loadImage("../images/obstacle1.png")
  obstacle2 = loadImage("../images/obstacle2.png")
  obstacle3 = loadImage("../images/obstacle3.png")
  obstacle4 = loadImage("../images/obstacle4.png")
  moveUp_img = loadImage("../images/up_arrow.png");
  moveLeft_img = loadImage("../images/left_arrow.png");
  moveRight_img = loadImage("../images/right_arrow.png");
  bulletLeft_img = loadImage("../images/bullet_left.png")
  bulletUp_img = loadImage("../images/bullet_up.png")
  bulletRight_img = loadImage("../images/bullet_right.png");
  coinImage = loadImage("../images/coin1.png")
  back_img = loadImage("../images/bg1.jpg");
  booster_img = loadImage("../images/booster.png")
  bronze_img = loadImage("../images/bronze.png");
  silver_img = loadImage("../images/silver.png");
  gold_img = loadImage("../images/gold.png");



  boosterGrp = new Group();
  coinGrp = new Group();
  
  
  
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  //canvas.mousePressed(backSound.play())
  database = firebase.database();
  finishedPlayers = 0;
  game = new Game();
  game.getState();
  game.start();

  yVel = 0;
  xVel = 0;

  xSet = false;
}


function draw(){
  background(back_img);
  if (playerCount === 4 && finishedPlayers === 0) {
    game.update(1);
  }

  //start the game for real
  if (gameState === 1) {
    game.play();
  }

  //end the game
  if (finishedPlayers === 4) {
    game.update(2);
    //gameState = 2;
  }

  //display ranking
  if (gameState === 2 && finishedPlayers === 4) {
    game.displayRanks();
  }
}
function keyPressed() {
  if (keyCode === 13 && gameState !== 1 && finishPass === false) {
    form.enter();
    console.log("hai");
    finishPass = true;
  }



  
}
