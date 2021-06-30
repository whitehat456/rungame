
function preload(){
  p1=loadImage("Character1.png")
}




function setup(){
    var canvas = createCanvas(1200,600);



    player1 = new player()
     platformA= new platform1()
     platformB=new platform2()
     

  
     


    

  


}

function draw(){
    background("orange");
    text (mouseX+"  "+mouseY,-400,50)
   console.log("Checking github comands")
    player1.characteristics()
    platformA.display()
    platformB.display()


 



    drawSprites()
   
}

