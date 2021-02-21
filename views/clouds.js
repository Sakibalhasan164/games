class Clouds{
    constructor(){
        this.pos=createVector(width,200)
        this.velocity=createVector(-3,0)
    }

  update(){
           this.pos.add(this.velocity)
  }

     Show(){
      fill(78,92,202)
       image(cloudeImg,this.pos.x,this.pos.y,230,180)
      }
      offscrine(){
          if(this.pos.x<=-180){
              this.pos.x=1300
            // console.log("j");
          }
      }
}