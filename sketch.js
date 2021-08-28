var bg
var eat, eatanim
var drink, drinkanim
var gym, gymanim
var sleep, sleepanim
var bath, bathanim
var brush, brushanim
var move, moveanim
var astronaut

function preload() {
bg = loadImage("Astronaut's daily routine/iss.png" );
gym = loadAnimation("Astronaut's daily routine/gym1.png","gym2.png","gym11.png","gym12.png" );
sleep = loadImage ("Astronaut's daily routine/sleep.png" );
bath = loadAnimation ("Astronaut's daily routine/bath1.png","bath2.png" );
brush = loadImage ("Astronaut's daily routine/brush.png" );
move = loadAnimation ( "Astronaut's daily routine/move.png","move1.png" );
}

function setup() {  
  createCanvas(800,400);
  astronaut = createSprite(300,230);
  astronaut.scale = 0.1
}

function draw() {
  background = bg  
 if (Keydown("UP_ARROW")){
astronaut.addAnimation ("brushanim",brush);
astronaut.changeAnimation ("brushanim");
astronaut.y = 350;
astronaut.velocityX= 0;
astronaut.velocityY= 0;
 }
 if (Keydown("DOWN_ARROW")){
  astronaut.addAnimation ("gymanim",gym);
  astronaut.changeAnimation ("gymanim");
  astronaut.y = 350;
  astronaut.velocityX= 0;
  astronaut.velocityY= 0;
}
if (Keydown("LEFT_ARROW")){
  astronaut.addAnimation ("eatanim",eat);
  astronaut.changeAnimation ("eatanim");
  astronaut.y = 350;
  astronaut.velocityX= 0;
  astronaut.velocityY= 0;
}
if (Keydown("RIGHT_ARROW")){
  astronaut.addAnimation ("bathanim",bath);
  astronaut.changeAnimation ("bathanim");
  astronaut.y = 350;
  astronaut.velocityX= 0;
  astronaut.velocityY= 0;
}
if (Keydown("m")){
  astronaut.addAnimation ("moveanim",move);
  astronaut.changeAnimation ("moveanim");
  astronaut.y = 350;
  astronaut.velocityX= 0;
  astronaut.velocityY= 0;
   }   
  drawSprites();
}