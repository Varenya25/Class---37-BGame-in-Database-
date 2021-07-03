var database;
var gameState = 0, playerCount = 0;
var form;
var game;
var player;
var allPlayers;

function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game = new Game ();
  game.getGameState ();
  game.start ();
}
 

function draw(){
  background("white");
 
  if (playerCount == 2){
    game.updateGameState (1);
  }
  
  if(gameState == 1){
   clear ();
   game.play();
  }
}