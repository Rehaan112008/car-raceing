class GAME {
    constructor(){
        
    }
    readState(){
        var u =database.ref('gameState')
        u.on("value",(data)=>{
            gameState=data.val()
        })}
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
   async startState(){
       if(gameState===0){
          form=new F() 
          form.display()
          player=new P()
          var r=await database.ref("playerCount").once("value")
          if(r.exixts()){
              playerCount=r.val()
              player.readCount()
          }
       }
redCar=createSprite(100,200)
yellowCar=createSprite(300,200)
whiteCar=createSprite(500,200)
blueCar=createSprite(700,200)
cars=[redCar,blueCar,yellowCar,whiteCar]


   }
   playState(){
       form.hide()
      P.readInfo() 
      if(allPlayers!==undefined){
          var index=0
          var x=250
          var y
          for(var e in allPlayers){
              index=index+1
              x=x+200
              y=displayHeight-allPlayers[e].distance
cars[index-1].x=x
cars[index-1].y=y
if(index===player.index){
    camera.position.x=displayWidth/2
    camera.position.y=cars[index-1].y
}
          }
      }
      drawSprites()
   }
   
}