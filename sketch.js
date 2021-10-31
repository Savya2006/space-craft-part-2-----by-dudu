var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("giphy.gif");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");

}

function setup() {
  createCanvas(700, 600);
  spacecraft = createSprite(285,400);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.25;
  
  iss = createSprite(330,210);
  iss.addImage(issimg);
  iss.scale = 0.7;
}

function draw() {
  background(bg);

 //fill("red")
 //text(mouseX+ "," +mouseY,500,50); 

 textSize(20);
 fill("white")
 stroke("black")
 strokeWeight(10);
 text("Use Arrow Keys To Move",15,55);
 text(" The Space Craft",10,90)


  spacecraft.addImage(scimg);
  if(!hasDocked){

     spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
  }
}

   /*if(spacecraft.y <= (iss.y+180) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);
   }*/

   /*if(spacecraft.y <= (iss.y-70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);
   }*/

   if(spacecraft.y <= (iss.y+60) && spacecraft.x <= (iss.x-15)){
     hasDocked = true;
     textSize(40);
     fill("white")
     stroke("black")
     strokeWeight(10);
     text("Docking Successfull", 200, 430);
   }

  /* if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);
   }*/

  drawSprites();
}
