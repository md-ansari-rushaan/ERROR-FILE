var canvas, backgroundImage;
var Car1,Car2,Car3,Car4;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var cars;
var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
