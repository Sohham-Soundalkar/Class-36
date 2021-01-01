var gameState = 0;
var playerCount, database, form, player, game;

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}