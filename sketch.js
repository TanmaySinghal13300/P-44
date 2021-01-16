var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var position=0;
var form, player, game;

var people,people1,people2,people3,people4;

var santa,santaImage;

function preload(){
  santaImage=loadImage("santa.png");
  happyBoyImage=loadImage("happyBoy.jpg");
  happyGirlImage=loadImage("happyGirl.jpg");
  sadBoyImage=loadImage("sadBoy.jpg");
  sadGirlImage=loadImage("sadGirl.jpg");
}

function setup(){
  canvas = createCanvas(1000,550);
  database = firebase.database();

  gift1 = new Gift();

  game = new Game();
  game.getState();
  game.start();

  santa=createSprite(250,300,50,50);
  santa.addImage(santaImage);
  santa.scale=0.1;

  feed = createButton("GIVE THE GIFTS");
  feed.position(1100,80);
  feed.mousePressed(giveGifts);
  
  add = createButton("ADD GIFTS");
  add.position(1100,40);
  add.mousePressed(addGift);
  
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  gift1.display();

}

  function addGift(){
   position++
   database.ref('/').update({
    gift : position
  })
  drawSprites();
}
function giveGifts(){
  if(position == 0)
  {
    gift1.updateGiftStock(0);
  }
  else
  {
    gift1.updateGiftStock(position-1)
  }
  
  database.ref('/').update({
    gift : gift1.getGiftStock(),
  
  })
}