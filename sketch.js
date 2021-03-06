const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld,ground,ground_options,ball,ball_options;

function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

    var ground_options={
      isStatic:true
    }
    ground=Bodies.rectangle(200,380,400,20,ground_options);
    World.add(myWorld,ground);

    var ball_options={
     restitution:1.0
    }

  ball=Bodies.circle(200,200,20,ball_options);
  World.add(myWorld,ball);
  
  console.log(ground.position.x);
  console.log*(ground.position.y);

    

}

function draw() {
  background(0,0,0);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
}