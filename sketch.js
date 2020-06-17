var  ball, dustbin;
var ground,wall11,wall21,wall31,wall1,wall2,wall3;;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 380, width, 20 , {isStatic:true} );
    World.add(world, ground);

    ball = new Ball(200,350);

    wall1 = new Wall(820,360,190,20);
    wall2 = new Wall(725,320,20,100);
    wall3 = new Wall(910,320,20,100);
   
    Engine.run(engine);
  
}
function draw() {
	background(0);

	rectMode(CENTER);
	rect(width/2,380,width,20);

	ball.display();
	wall1.display();
	wall2.display();
	wall3.display();

	drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW ){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-75});
	}
}



