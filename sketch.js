const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box1, box2, ground, pig, log, bird;


function setup() {
  createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;
 

 ground = new Ground(600, height, 1200, 20)
box1 = new Box(700, 320, 70, 70)
box2 = new Box(900, 320, 70, 70)
pig = new Pig(800, 320)
log1 = new Log(790, 250, 300, PI/2)
box3 = new Box(700, 230, 70, 70)
box4 = new Box(900, 230, 70, 70)
pig2 = new Pig(800, 230)
log2 = new Log(790, 170,300, PI/2)
log3 = new Log(750, 110, 150, PI/6)
log4 = new Log(850, 110, 150, -PI/6)
box5 = new Box(790, 150, 70, 70)
bird = new Bird(100, 100)
}

function draw() {
  background(0); 
  Engine.update(engine)
  box1.display() 
  box2.display()
  ground.display()
  pig.display()
 log1.display()
 box3.display()
 box4.display()
 pig2.display()
 log2.display()
log3.display()
log4.display()
box5.display()
bird.display()
}