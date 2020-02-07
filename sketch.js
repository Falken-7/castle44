const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var restart;
var gameState = "onSling";
var score = 0;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   // World.add(world, mouseConstraint);


    ground = new Ground(600,height,1200,20);
    groun2 = new Ground(1200,400,20,800);
    tower1 = new Tower1(720,200,80,200);
    tower2 = new Tower1(880,200,80,200);
   tower3 = new Tower1(800,200,80,300);
   tower4 = new Tower1(660,200,20,350);
   tower5 = new Tower1(940,200,20,350);
    bird = new Bird(200,380);
   // var restart  = createSprites(20,20,10,10);
    slingshot = new SlingShot(bird.body,{x:200, y:300});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    text("Score:"+score,20,20);
    text("HIT HARD TO EARN POINTS",20,40);
    //if(Bird.istouching(Tower1)){
//score++;
   // }
 // var restart  = createSprite(20,20,10,10);
    ground.display();
    groun2.display();
  //restart.display();
    tower1.display();
    tower2.display();
    tower3.display();
    tower4.display();
    tower5.display();

  //  rock.display();
            
   

    bird.display();
   
    //log6.display();
    slingshot.display();   
    //createEdgeSprites();
  //  drawSprites(); 
}

function mouseDragged(){    //if (gameState!=="launched"){       
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
        }
        
    //  }
        
function mouseReleased(){  
      slingshot.fly();   

       gameState = "launched";
    }
function keyPressed(){   
     if(keyCode === 32 && bird.body.speed < 1){      
     //bird.trajectory = [];       
     Matter.Body.setPosition(bird.body,{x:200, y:50});    
   slingshot.attach(bird.body);
   }}
//function keyPressed(){   
   // if(keyCode === 32 && bird.body.speed < 1){      
   // bird.trajectory = [];       
  //  Matter.Body.setPosition(bird.body,{x:200, y:50});    
 // slingshot.attach(bird.body);    }}