var frame ;
var IMG_1;
var IMG_2;
var IMG_3;
var monroe;
var font;
var click = 4 ;

function preload() {
  frame = loadImage('frame.png');
  IMG_1 =  loadImage('1.png');
  IMG_2 =  loadImage('2.png');
  IMG_3 =  loadImage('3.png');
  monroe = loadImage('monroe.png');
   font = loadImage('font.png');
}

function mouseClicked() {
  if(mouseButton === LEFT_ARROW) {
  if (click = 4){
    click = 255;
  }
  else {
    click = 4;
  }
  }
  if(mouseButton === RIGHT_ARROW) {
    image(monroe,width/2,height/2);
  }
}


function setup() {
  background(50);
  createCanvas(1000,1000);
  imageMode(CENTER);
  

}

function draw() {
 background(50);
 frameRate(50);  
 strokeWeight(random(0,3));
 stroke(255,255,0,random(10,20));
 line(0,-100, random(0,width/2+100),random(500,1000));
 line(width,-100,random(width/2-100,width),random(500,1000));
 
 
 for (var i = 0; i<70; i++) {
 stroke(255,random(20,60));
 line(0,-100, random(0,width/2+100),random(500,1000));
 line(width,-100,random(width/2-100,width),random(500,1000));
 }
 
   tint(mouseX%255+120,(mouseX+mouseY)%255+30,mouseY%255+120);
  image(monroe,width/2,height/2);
  
  
  tint(mouseX%255+100,(mouseX+mouseY)%255+120,mouseY%255+140);
  image(IMG_2,width/2,height/2);
  
  tint(mouseX%255+140,(mouseX+mouseY)%255,mouseY%255+100);
  image(IMG_3,width/2,height/2);
  
  tint(mouseX%70+145); 
  image(IMG_1,width/2,height/2);
  filter(POSTERIZE,click);
  
   fill(0);
 textSize(13);
 text("L.Joeum",width/2+190,height/2+340);
  
  
  
  noTint();
  image(frame,width/2,height/2);
  image(font,width/2,height/2-15);
   
}