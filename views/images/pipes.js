class Pipes{
    constructor(){
            this.TopPipe=random(height/2)
            this.BottomPipe=random(height/2)

            this.pos1=createVector(width+100,0)
            this.pos2=createVector(width+100,height-this.BottomPipe)
            this.vel=createVector(-5,0)
            
    }


    update(){
        this.pos1.add(this.vel)
        this.pos2.add(this.vel)
        // console.log("pipe")
    }

    //sjhow the pipes
    show(){
        fill(0, 102, 0)
        rect(this.pos1.x-100,this.pos1.y,100,this.TopPipe)
        rect(this.pos2.x-100,this.pos2.y,100,this.BottomPipe)
        //line
        // stroke(255)
        // line(this.pos1.x,this.pos1.y,this.pos2.x,this.pos2.y)
    }

    //offScrin
    offscrine(){
        if(this.pos1.x<-100 && this.pos2.x<-100){
            // console.log("offscreen");
            return true
        }
        else return false
    }
    // incScore(bird){
    //     if(100>this.pos1.x+50){
    //         return true
    //         // this.vel=createVector(0,0)
    //     }else return false
    // }
      
    
}
