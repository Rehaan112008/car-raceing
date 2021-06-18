var  database
var form
var player
var playerCount=0
var gameState=0
var allPlayers
var game
var redCar
var blueCar
var yellowCar
var whiteCar
var cars



function preload(){

}
function setuo(){
createCanvas(displayWidth,displayHeight)
database=firebase.database()
game=new GAME()
game.readState()
game.startState()

}
function draw(){
if(playerCount===4){
  game.update(1)
}
if(gameState===1){
  clear()
  game.playState()

}
}
