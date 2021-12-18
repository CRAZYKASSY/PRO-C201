
function preload (){
  back = loadImage ("iss.png");
  sleep = loadImage ("sleep.png");
  eat = loadAnimation ("eat1.png","eat2.png");
  drink = loadAnimation ("drink1.png","drink2.png");
  brush = loadAnimation ("brush.png");
  bath = loadAnimation ("bath1.png","bath2.png");
  gym = loadAnimation ("gym1.png","gym2.png");
  move = loadAnimation ("move.png","move1.png");
}

function setup() {
  createCanvas(750,450);
  edges = createEdgeSprites ();

  textSize (18);
  fill ("white");
  text ("Instrucciones",300,200);

  bg = createSprite (375,225,300,100);
  bg.addImage ("background",back);
  bg.scale =0.15;
  astronaut = createSprite(375, 225, 50, 50);
  astronaut.addImage ("sleeping",sleep);
  astronaut.scale =0.1;

  astronaut.setCollider("rectangle",0,0,20,100);
  astronaut.debug = false;
}

function draw() {
  background(0); 
  
  if (keyDown ("UP_ARROW")){
    astronaut.addAnimation ("brushing",brush);
    astronaut.changeAnimation ("brushing");
    astronaut.x = 325;
    astronaut.y = 325;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;

  }

  if (keyDown ("DOWN_ARROW")){
    astronaut.addAnimation ("gym1",gym);
    astronaut.changeAnimation ("gym1");
    astronaut.x = 250;
    astronaut.y =325;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if (keyDown ("LEFT_ARROW")){
    astronaut.addAnimation ("bathing",bath);
    astronaut.changeAnimation ("bathing");
    astronaut.x = 250;
    astronaut.y = 325;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if (keyDown("RIGHT_ARROW")){
   astronaut.addAnimation ("eating",eat);
   astronaut.changeAnimation ("eating");
   astronaut.x = 185;
   astronaut.y = 325;
   astronaut.velocityY = -2;
   astronaut.velocityX = 2;
  }
  drawSprites();
  astronaut.bounceOff (edges);
  createEdgeSprites ();
  textSize (18);
  text ("Instrucciones",15,24);
  textSize (14);
  text ("Flecha hacia Arriba = Cepillarse",15,38);
  textSize (14);
  text ("Flecha hacia Abajo = Ejercitarse",15,52);
  textSize (14);
  text ("Flecha hacia Izquierda = Comer",15,66);
  textSize (14);
  text ("Flecha hacia Derecha = Bañarse",15,80);
  textSize (14);
  text ("Tecla m = Moverse",15,94);

  if (keyDown("SPACE")){
    console.log ("hola");
    astronaut.addAnimation ("move1",move);
    astronaut.changeAnimation ("move1");
    astronaut.velocityY = -2;
    astronaut.velocityX = 2;
  }

}