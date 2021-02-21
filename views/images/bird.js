class Bird{
    constructor(){
        
        this.pos=createVector(100,300)
        
        
        this.gavity=createVector(0,.8)
        
        this.lift=createVector(0,-18)
        this.vel=createVector(0,0)
        this.r=100
    }
     
   
  //lift the bird up
    liftUp(){
        this.vel.add(this.lift)
    }

  update(){
     this.vel.add(this.gavity)
     
    this.pos.add(this.vel)
    this.vel.mult(.9)

     if(this.pos.y>600+this.r/2){
        // console.log("edge");
        this.pos.y=height
        // this.vel=0
    }
    else if(this.pos.y<0){
        this.pos.y=0
        // this.vel=0

    }
  }

    //show the bird
    show(){
        noStroke()
        fill(255,0,0,150)
        image(birdmg,this.pos.x,this.pos.y,this.r)
    }
   

}