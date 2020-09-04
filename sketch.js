// Creates all the Constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// Declares the variables
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

// Creates the preload function
function preload() {
    //Preloads this function. (Lines 106 - 125)
    getBackgroundImg();
}

// Setup everything
function setup(){
    //Setup the canvas
    var canvas = createCanvas(1200,400);
    //Creates the Engine.create() and the engine.world
    engine = Engine.create();
    world = engine.world;

    //Setup the objects
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);
    log3 =  new Log(810,180,300, PI/2);
    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    bird = new Bird(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

//Draw all the things
function draw(){
    //Shows the score
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    //Updates the engine
    Engine.update(engine);
    //Displays the variables
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();
    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();
    box5.display();
    log4.display();
    log5.display();
    bird.display();
    platform.display();
    slingshot.display();    
}

// Makes the mouseDragged() function
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}

// Makes the mouseReleased() function
function mouseReleased(){
    //When the mouse is released, the bird is free.
    slingshot.fly();
    gameState = "launched";
}

// Makes the keyPressed() function
function keyPressed(){
    //If you press the spacebar, the bird will attach to the slingshot, letting you get another chance.
    if(keyCode === 32){
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body, {x: 200, y: 50});
    slingshot.attach(bird.body);
    }
}

// Gets the background image ASAP
async function getBackgroundImg(){
    //Response will fetch this website 
    var response = await fetch("https://worldtimeapi.org/api/timezone/america/New_York");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    //If the hour is between 6 to 19, this image will show up.
    if(hour>=06 && hour<=19){
        bg = "sprites/bg.png";
    }
    // Otherwise, this image shows up.
    else{
        bg = "sprites/bg2.png";
    }
    //"bg" will be the background.
    backgroundImg = loadImage(bg);
    //You will find the backgroung in the console.
    console.log(backgroundImg);
}
