
var backgroundImage, bike1_img, bike2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, bike_1, bike_2, fuels, powerCoins, obstacles;
var bikes = [];
var blastImg;

function preload() {
  backgroundImage = loadImage("background.png");
  bike1_img = loadImage("bike_1.png");
  bike2_img = loadImage("bike_2.png");
  track = loadImage("track.jpg");
  fuelImage = loadImage("nitro.png");
  powerCoinImage = loadImage("coin.png");
  obstacle1Image = loadImage("obstacle1.png");
  obstacle2Image = loadImage("obstacle2.png");
  lifeImage = loadImage("life.png");
  blastImg = loadImage("blast.png");
  
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start()
}



function draw() {
  background(255,255,255);  
  background(backgroundImage);
   if (playerCount === 2) {
  game.update(1);
   }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
  drawSprites();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}