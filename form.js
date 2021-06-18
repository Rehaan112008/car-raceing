class F{
    constructor(){
       this.e=createElement('h2') 
       this.w=createInput('name')
       this.b=createButton('PLAY =>')
       this.g=createElement('h3')
    }
    hide(){
     this.g.hide() 
     this.w.hide()
     this.b.hide()
    }
display(){
  
 this.e.html('4 player raceing game')
 this.e.position(displayWidth/2-100,displayHeight/2-300)
 
 this.w.position(displayWidth/2-100,displayHeight/2)

 this.b.position(displayWidth/2+200,displayHeight/2+200)

this.b.mousePressed(()=>{
    this.w.hide()
    this.b.hide()
    var name=this.w.value()
    playerCount=playerCount+1
    player.update(name)
    player.updateCount(playerCount)
    this.g.html("HELLO "+name)
    this.g.position(displayWidth/2,displayHeight/2)
})
}
}