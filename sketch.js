const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ball;
var ball1;
var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
    var ball_options = {
        restitution:0.9
    }
    var ball1_options = {
        restitution:0.8
    }
    ball = Bodies.circle(250,250,25,ball_options);
    World.add(world,ball);
    ball1 = Bodies.circle(200,200,25,ball_options);
    World.add(world,ball1);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,25,25);
    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,25,25)
}