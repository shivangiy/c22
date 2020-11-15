const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  var ground_options = {
    isStatic:true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myworld,ground);

  var balloptions={
    restitution:1
  }

  ball=Bodies.circle(200,100,20,balloptions)
  World.add(myworld,ball);

  console.log(ground);

}

function draw() {
  background("pink");  

  Engine.update(myengine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);

}