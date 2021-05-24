class Form {

  constructor() {
    this.input = createInput("").attribute("placeholder", "Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('RESET');


  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  enter() {
    this.title.hide();
    this.input.hide();
    this.button.hide();

    player.name = this.input.value();
    playerCount++;
    player.index = playerCount;
    player.updateName();
    player.updateCount(playerCount);

    this.greeting.html("Welcome " + player.name + "!");
    this.greeting.position(displayWidth / 2.1 - player.name.length * (displayWidth / 110),125);
  }

  display(){
    this.title.html("RACING POINT..");
    this.title.position(windowWidth/2 -220,windowHeight/4-130);
    this.title.style('font-size', '65px');
    this.title.style('color', 'blacl');

    this.input.position(windowWidth/2 - 100 , windowHeight/2 - 20);
    this.input.style('width', '200px');
    this.input.style('height', '20px');
    this.input.style('background', 'lavender');
    this.button.position(windowWidth/2-30 , windowHeight/2+50);
    this.button.style('width', '70px');
    this.button.style('height', '30px');
    this.button.style('background', 'yellow');
    this.reset.position(windowWidth-160,windowHeight-50);
    this.reset.style('width', '100px');
    this.reset.style('height', '30px');
    this.reset.style('background', 'lightpink');


    this.button.mousePressed(()=>{
     
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name.toUpperCase())
      this.greeting.position(windowWidth/2 - 180, windowHeight/4+30);
      this.greeting.style('color', 'white');
      this.greeting.style('font-size', '80px');
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
     
    database.ref("/").update({
      players: null,
      finishedPlayers: 0,
    })
      
    });
   
  }
}
