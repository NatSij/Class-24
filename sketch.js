const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var stick1, stick2, stick3, stick4;
var pig1, pig2;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    box5 = new Box(810, 160, 70, 70);
    ground = new Ground(600,height,1200,20);
    stick1 = new Stick(810, 260, 300, PI/2);
    stick2 = new Stick(810, 180, 300, PI/2);
    stick3 = new Stick(795, 120, 135, PI/7);
    stick4 = new Stick(805, 120, 150, -PI/7);
    pig1 = new Pig(810, 350);
    pig2 = new Pig(810, 250);
    bird1 = new Bird(100, 100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    stick1.display();
    stick2.display();
    stick3.display();
    stick4.display();
    pig1.display();
    pig2.display();
    bird1.display();
}