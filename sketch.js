var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var plinkos = [];
var divisions=[]
var particles=[]
var divisionHeight=300;
var score =0,particle,count=0;
var gameState="play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
  {
    
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
    
}
 


function draw() {
  background("black");
  textSize(20)
  if(gameState==="play"){
    text("Score : "+score,20,30);
  }
  Engine.update(engine);

  ground.display();
    
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
 
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  fill(255/2)
  //text(mouseX+","+mouseY,mouseX,mouseY)
  fill(255)
  text("500",15,511)
  text("500",745,511)
  text("50",431,511)
  text("10",515,511)
  text("10",355,511)
  text("50",270,511)
  text("100",590,511)
  text("250",665,511)
  text("100",180,511)
  text("250",100,511)

  if(keyCode===81){
    gameState="play"
    count=0
  }
  if(keyCode===89){
    count=5
    score=0
    gameState="end"
  }
  push()
  stroke(255,255,0)
  strokeWeight(5)
  line(0,485,800,485)
  pop();
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>500){
      if(particle.body.position.x>1&&particle.body.position.x<82){
        score+=500
        if(count>=5) gameState="end"
        particle=null
      }else if((particle.body.position.x>92&&particle.body.position.x<162)||(particle.body.position.x>732&&particle.body.position.x<788)){
        score+=250
        if(count>=5) gameState="end"
        particle=null
      }else if(particle.body.position.x>168&&particle.body.position.x<220){
        score+=100
        if(count>=5) gameState="end"
        particle=null
      }else if(particle.body.position.x>652&&particle.body.position.x<680){
      score+=250
      if(count>=5) gameState="end"
      particle=null
    }else if(particle.body.position.x>720&&particle.body.position.x<782){
      score+=500
      if(count>=5) gameState="end"
      particle=null
      }else if(particle.body.position.x>572&&particle.body.position.x<642){
        score+=100
        if(count>=5) gameState="end"
        particle=null
      }else if(particle.body.position.x>252&&particle.body.position.x<322){
        score+=50
        if(count>=5) gameState="end"
        particle=null
      }else if((particle.body.position.x>333&&particle.body.position.x<430)||(particle.body.position.x>493&&particle.body.position.x<562)){
        score+=10
        if(count>=5) gameState="end"
        particle=null
      }else if(particle.body.position.x>412&&particle.body.position.x<500){
        score+=50
        if(count>=5) gameState="end"
        particle=null
      }
    }
  }
  if(gameState==="end"){
    textSize(50)
    fill("blue")
    text("You're out of chances",177,244)
    text("Your Score is "+score,180,290);
  }
}
function mousePressed(){
  if(gameState!=="end"){
    count++
    particle = new Particle(mouseX,10,10,10);
  }
}