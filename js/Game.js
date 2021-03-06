//   to bring the images of people in exact positions 
//   to find out where the people images are getting called 
//  so once imgs are set and when u click on give the gifts 
//the position of the gift should to change to the active should player




class Game {
  constructor(){

   
  }
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    people1=createSprite(100,200);
    people1.addImage(happyBoyImage);
    people1.scale=0.05

    people2=createSprite(300,200);
    people2.addImage(happyGirlImage);
    people2.scale=0.05

    people3=createSprite(500,200);
    people3.addImage(sadBoyImage);
    people3.scale=0.05

    people4=createSprite(700,200);
    people4.addImage(sadGirlImage);
    people4.scale=0.05

    people=[people1,people2,people3,people4];
  }

 /* play(){
    form.hide();
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var index=0,x=0,y;
      for(var plr in allPlayers){
        index=index+1;
        x=x+200;
        y=displayHeight-allPlayers[plr].distance;
        people[index-1].x=x;
        people[index-1].y=y;
        if (index === player.index){
          people[index-1].shapeColor="red";
          camera.position.x=displayWidth;
          camera.position.y=people[index-1].y;
        }
      }
    }

  /*  if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
      console.log(player.distance)
    }*/
    //drawSprites();
 /* }*/


  play(){
    form.hide();
    
    Player.getPlayerInfo();
   
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
     
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the people
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the people a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the people in y direction
        y = displayHeight - allPlayers[plr].distance;
        people[index-1].x = x;
        people[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          people[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = people[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    
   
    drawSprites();

  }

}
