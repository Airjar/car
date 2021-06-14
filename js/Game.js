class Game {
  constructor(){}
  
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
      var pref = await database.ref('playerCount').once("value")
      if(pref.exists()){
        playerCount = pref.val()
        player.getCount();
      }
     
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide()
    textSize(30)
    text("game start" ,120,100)
    Player.getPlayerInfo()
    console.log(allPlayers)
    if(allPlayers!==undefined){
      var displayPosition = 130
      displayPosition = displayPosition + 20
      textSize(15)
      text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)

    }
    if(keyIsDown(UP_ARROW)&&player.index!= null){
      player.distance += 50
      player.update()
    }
  }

}
