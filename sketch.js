
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var bucket1;
var ground;


  

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(100,100);
  bucket1=new Bucket(698,685,135.200);

  ground = new Ground(600,height,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  paper.display();
  bucket1.display();
 
  ground.display();
  
  drawSprites();
 
}

function keyPressed()
{
    if (keyCode === UP_ARROW)
    {
          Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    }
}

