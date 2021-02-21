
let bird;
let pipes=[];
let clouds;


//dOm
let gameHeading;
let landingIMAGE;
let playBTN;
let playigGame=false;

// //score
// let score=0
let birdmg;
let bgimage;
let cloudeImg;
// let pipeimg
function preload() {
    birdmg=loadImage('images/bird.png');
    // birdmg.style("border-radius","50%")
    // pipeimg=loadImage("images/")
    bgimage=loadImage("images/background.png")
    cloudeImg =loadImage("images/cloud.jpg")
  }

function setup(){
    createCanvas(600,600)
    clouds=new Clouds()
    //bird
    bird=new Bird()

    /// the pipes

    pipes.push(new Pipes())
    //the clouds
     

 //DOM
 playBTN=select("#play-btn")
 playBTN.mousePressed(()=>{
     console.log("press");
     playigGame=true;
 })

}


function draw(){
    background(bgimage)

  gameHeading=select("#heading")
  landingIMAGE=select("#birdIMAGE")
  
 
 
if(playigGame){
     gameHeading.style("display","none")
    //  loop()
 }

if(playigGame){
    landingIMAGE.style("display","none")
    //  loop()
 }
 
if(playigGame){
    playBTN.style("display","none")
    //  loop()
 }

 //clouds
if(playigGame) clouds.Show()
   if(playigGame) clouds.update()
   if(playigGame) clouds.offscrine()



    //shoiw the bord
   if(playigGame) bird.show()
   if(playigGame) bird.update()

    ///pipe
    for(let i=pipes.length-1;i>=0;i--){
        if(playigGame) pipes[i].show()
        if(playigGame) pipes[i].update()
       
            if( pipes[i].offscrine()){
            // console.log("jhn");
            pipes.splice(i,1)
        }
        }
    if(frameCount %100 ==0){
        pipes.push(new Pipes())
    }

}

function keyPressed(){
    if(keyCode===32){
        // console.log(0);
        bird.liftUp()
    }
}

