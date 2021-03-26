
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

var engine, world;
var paper,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;

	
	

ground1=new ground(width/2,670,width,20);
paper1=new Paper(200,450,30);
dustbin1=new DustBin(1200,650);

// var render=Render.create({
//   element:document.body,
//   engine:engine,
//   options:{
//     width:1600,
//     height:700,
//     wireframes:false
//   }
// })
// Render.run(render); 
// }
}

function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(0)

paper1.display();
ground1.display();
dustbin1.display();
 


}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.Body, paper1.Body.position, {x:130,y:-145});
  }
}


