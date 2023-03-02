img = "";
var status="";
objects=[];
function preload(){
  img = loadImage('floorrrrrr');
}
function setup(){
 canvas=createCanvas(600,400);
 canvas.center();
 objectDetection=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status detecting objects";
}
function draw(){
image(img,0,0,600,400);
if(status != ""){
  for(i=0; i<objects.length; i++){
    document.getElementById("status").innerHTML="status:objects detected";
    fill("red");
    percent= floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
    noFill();
    stroke("blue");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
  }
}
/*stroke("blue");
fill('red');
text("dog",35,35);
noFill();
rect(35,35,300,600);
 rect(255,55,300,600);
 stroke("blue");
 fill("red");
 text("cat",255,55);*/
}
function modelLoaded(){
  console.log("moel is loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  status=true;
  objectDetection.detect(img,gotResults);
}
function gotResults(error, results) 
{
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects=results;
}
