const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var polygon, slingShot;
var bg = "sprites/bg.jpg";

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(810,320,70,70);
    log1 = new Log(810,260,300, PI/2);
    log3 =  new Log(810,180,300, PI/2);

    box4 = new Box(700,240,70,70);
    box5 = new Box(920,240,70,70);
box6 = new Box(810,240,70,70);
box7 = new Box(610,320,70,70);
box8 = new Box(1010,320,70,70);
    box9 = new Box(810,160,70,70);


    polygon = new Polygon(200,50);

    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();

 box3.display();
 box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
log1.display();
log3.display();

    polygon.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}
async function getBackgroundImg(){
    var response =await fetch("http://worldtimeapi.org/api/timezone/Europe/London");

    var responseJSON =await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour >= 06 && hour <= 19){
        bg = "sprites/bg.jpg";
    }
    else {
        bg = "sprites/bg2.png";
    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}