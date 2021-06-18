class P{
    constructor(){
this.name=null
this.index=null
this.distance=0
    }
    readCount(){
        var u=database.ref('playerCount')
        u.on("value",(data)=>{
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').upadte({
            playerCount:count
        })
    }
    upadte(){
        var a="players/player "+this.index
        database.ref(a).set({
            name:this.name
        })
    }
 static readInfo(){
        var t=database.ref('players')
        t.on("value",(data)=>{
            allPlayers=data.val()
        })
    }
}