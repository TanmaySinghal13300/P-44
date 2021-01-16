class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset=createButton("Reset");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
   
    this.title.html("SANTA GIVING GIFTS");
    this.title.position(400, 0);

    this.input.position(435, displayHeight/2-80);
    this.button.position(490, displayHeight/2);
    this.reset.position(displayWidth-265,displayHeight-650);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.updateCount(playerCount);
      player.update();
      
      this.greeting.html("Hello " + player.name)
      this.greeting.position(470, displayHeight/4);
    });
    

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    })
  }
}
