class player{

constructor(){
   this. playerm = createSprite(150,300,30,70)
    this.playerm.addImage(p1)
    this.playerm.debug=true
}

move(){
    this.playerm.velocityX=10
  
  
    if(keyDown("LEFT_ARROW"))
    {
     this. playerm.velocityX=-4
    }
  
    
    if(keyDown("UP_ARROW"))
    {
      
      console.log("WORKING")
      this.playerm.velocityY=-20
    }
    
    if(keyDown("DOWN_ARROW"))
    {
        this.playerm.setCollider("circle",0,40,30)
      console.log("WORKING")
    
    }
    
}



characteristics(){
    
    this.playerm.collide(platformA.platformd)
    this.playerm.collide(platformB.platformd)
    this.playerm.collide(platformA.tower)
    this.playerm.velocityY=this.playerm.velocityY+0.8


      
    if(this.playerm.isTouching(platformA.platform)||this.playerm.x<500||this.playerm.isTouching(platformA.platform)){
       this.move()
      }

       
     camera .position.x=this.playerm.x
     camera .position.y=this.playerm.y
 
}



}