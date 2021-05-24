class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.positionX = 0;
    this.name = null;
    this.rank = 0;
    this.coins = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      positionX : this.positionX,
      rank:this.rank,
      coins:this.coins
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getCarsAtEnd(){
    var finishedPlayersRef = database.ref('finishedPlayers');
    finishedPlayersRef.on("value",(data)=>{
        finishedPlayers = data.val();
    });
  }
  static updateCarsAtEnd(){
    database.ref('/').update({
      finishedPlayers: finishedPlayers + 1
  });
  this.rank += 1;
  }
}
