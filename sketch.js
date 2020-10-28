
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint = Matter.Constraint;
var boyImage, ground, slingshot, stone, treebase, treesideLeft, treesideRight
var mango1, mango2, mango3, mango4, mango5, mango6;


function preload(){
	boyImage = loadImage("Images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, height, 800, 20)
	treebase = new treeBase(600, 650, 100, 10)
	//treesideLeft = new treeSides(550, 500, 10, 100)
	//treesideRight = new treeSides(650, 500, 10, 100)
	stone = new Stone(100, 500, 60)
	slingshot = new Slingshot(stone.body, {x: 90, y: 530})

	mango1 = new Mango(450, 200, 30);
	mango2 = new Mango(500, 170, 40);
	mango3 = new Mango(470, 280, 35);
	mango4 = new Mango(550, 300, 33);
	mango5 = new Mango(570, 320, 28);
	mango6 = new Mango(600, 130, 38);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
	image(boyImage, 150, 600, 200, 300);

	ground.display();
	treebase.display();
	//treesideLeft.display();
	//treesideRight.display();
	stone.display();
	slingshot.display();

	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
slingshot.fly();
}

function keyPressed(){
if(keyCode === 32){
	Matter.Body.setPosition(stone.body, {x:100, y:500})
	slingshot.attach(stone.body);
}
}

function detectCollision(Lstone, Lmango){
	mangoBodyPosition = Lmango.body.position
	stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance <= Lmango.r+Lstone.r)
		{
			Matter.Body.setStatic(Lmango.body, false);
		}
}





