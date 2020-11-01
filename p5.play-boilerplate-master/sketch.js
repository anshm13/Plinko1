const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHieght = 300;

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(240, 790, 480, 20);

  Engine.run(engine);

  for (k=0; k<=width; k=k+100) {
    divisions.push(new Division)
  }
}

function draw() {
  background(0);

  ground.display();
}