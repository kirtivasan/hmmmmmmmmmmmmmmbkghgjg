
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1,rope2,rope3,rope4,rope5;
var bobble1,bobble2,bobble3,bobble4,bobble5;
var block1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
 
	block1 = new block(400,50,400,50);

	bobble1= new ball(200,200,PI);
	bobble2= new ball(280,200,PI);
	bobble3= new ball(360,200,PI);
	bobble4= new ball(440,200,PI);
	bobble5= new ball(520,200,PI);
	
  
	rope1 = new rope(bobble1.body,block1.body,70*2,0);
	rope2 = new rope(bobble2.body,block1.body,70*2,0);
	rope3 = new rope(bobble3.body,block1.body,70*2,0);
	rope4 = new rope(bobble4.body,block1.body,70*2,0);
	rope5 = new rope(bobble5.body,block1.body,70*2,0);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(2,231,101);
  block1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobble1.display();
  bobble2.display();
  bobble3.display();
  bobble4.display();
  bobble5.display();

  drawSprites();
 
}



