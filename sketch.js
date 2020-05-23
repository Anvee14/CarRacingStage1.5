var canvas, backgroundImage;
var trackImg
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;


var form, player, game;
var obstacle1,obstacle2
var obstacle1Img,obstacle2Img
var gameOver,gameOverImg
var cars, car1, car2, car3, car4;
var car1Img,car2Img,car3Img,car4Img
function preload(){
  car1Img = loadImage("images/car1.png")
  car2Img = loadImage("images/car2.png")
  car3Img = loadImage("images/car3.png")
  car4Img = loadImage("images/car4.png")
  obstacle1Img = loadImage("images/obstacle.png")
  obstacle2Img = loadImage("images/obstacle.png")
  gameOverImg = loadImage("images/gameOver.png")
  trackImg = loadImage("images/track.jpg")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  gameOver = createSprite(200,200,100,100)
  gameOver.addImage("gameOver1",gameOverImg)
  gameOver.visible = false
  console.log(player.distance)
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState == 2){
    game.reset()
    
  }
  
}
