
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, tree, boy, mango1, mango2, mango3, mango4, mango5, chain, stone;

function preload()
{
	tree = loadImage("Sprites/tree.png");
	boy = loadImage("Sprites/boy.png");

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 650, 800, 10);
	stone = new Stone(200, 200, 30, 30);
	chain = new Chain(stone.body, {x: 150, y: 550})
	mango1 = new Mango(600, 250, 50, 50);
	mango2 = new Mango(700, 300, 50, 50);
	mango3 = new Mango(700, 250, 50, 50);
	mango4 = new Mango(600, 300, 50, 50);
	mango5 = new Mango(650, 280, 50, 50);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  image(tree, 500, 170, 300, 500);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  image(boy, 200, 600, 150, 200);
  stone.display();
  chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.detatch();
}

function detectCollsion(mango, stone){
	decectcollosion
}

