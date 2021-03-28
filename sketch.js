var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  if (gameState === 1) {
    clear(); 
    game.play();
    var score1 = database.ref("players/player1/score");
    var score2 = database.ref("players/player2/score");
    var name1 = database.ref("players/player1/name");
    var name2 = database.ref("players/player2/name");
    fill(rgb(208, 255, 0));
    text(name1,"'s Score:"+score1,20,20);
    text(name2,"'s Score:"+score2,20,40);
  }
  if (gameState === 2) {
    game.end();
  }
  if (playerCount === 2) {
    game.update(1);
  }
}