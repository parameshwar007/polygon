const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon_img,polygon;
var slingshot;
var stand1,stand2;
var ground;



function setup() {
  createCanvas(800,800);
  stroke(255)
stand1=new Stand(390,300,250,10)
 stand2=new Stand(700,200,200,10)
  ground=new Ground()
box1=new Box(300,275,30,40) 
box2=new Box(330,275,30,40) 
box3=new Box(360,275,30,40) 
box4=new Box(390,275,30,40) 
box5=new Box(420,275,30,40) 
box6=new Box(450,275,30,40) 
box7=new Box(480,275,30,40) 
box8=new Box(330,235,30,40) 
box9=new Box(360,235,30,40) 
box10=new Box(390,235,30,40) 
box11=new Box(420,235,30,40) 
box12=new Box(450,235,30,40) 
box13=new Box(360,195,30,40) 
box14=new Box(390,195,30,40) 
box15=new Box(390,195,30,40) 
box16=new Box(390,155,30,40)

//second

box17=new Box(640,175,30,40) 
box18=new Box(670,175,30,40) 
box19=new Box(700,175,30,40) 
box20=new Box(730,175,30,40) 
box21=new Box(760,175,30,40) 
box22=new Box(670,135,30,40) 
box23=new Box(700,135,30,40) 
box24=new Box(730,135,30,40) 
box25=new Box(700,95,30,40) 

polygon = Bodies.circle(50,200,20);
  World.add(world,ball);

slingshot=new slingshot(this.polygon,{x:100,y:200})













}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  

 ground.display()
 stand1.display()
 stand2.display()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()
 box11.display()
 box12.display()
 box13.display()
 box14.display()
 box15.display()


 box16.display()
 box17.display()
 box18.display()
 box19.display()
 box20.display()
 box21.display()
 box22.display()
























  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 