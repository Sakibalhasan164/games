
let bird;
let pipes=[];

// //score
// let score=0
let birdmg;
// let pipeimg
function preload() {
    birdmg=loadImage('images/bird.png');
    // pipeimg=loadImage("images/")
  }

function setup(){
    createCanvas(600,600)
    //bird
    bird=new Bird()

    /// the pipes

    pipes.push(new Pipes())
    
    //score
//  
    
}


function draw(){
    background(0, 204, 255,100)


    //shoiw the bord
    bird.show()
    bird.update()


    ///pipe
    for(let i=pipes.length-1;i>=0;i--){
        pipes[i].show()
        pipes[i].update()
       
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
