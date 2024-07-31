class Walker{
  //an idea of a dot that can move UP, DOWN, LEFT AND RIGHT
  constructor(x = 200,y=200,step = 10,c = "purple") {
    // console.log ("Hello, the idea was created!");
    //give the idea of walker specific properties
    this.x = x
    this.y = y;
    this.step = step
    this.coloring = c
    //this.step = random ([1,20]);
    
  }
  
  showUp() {
    //Style the next points.
    stroke(this.coloring);
    strokeWeight(20);
    //draw dot on a screen at the x, y position
    point(this.x, this.y);
  }
  
  jump(){
    //console.log(this.coloring + " jumps");
    //change direction  x
    let doIwantToGoX = random ([-1,1])

    let doIwantToGoY = random ([-1,1])
    
    //this.step += random([-5,20])
    this.x += this.step * doIwantToGoX
    //check limits of the screen
      // If X reaches the end of the screen reverse
     // or if X reaches 0
      if(this.x >= displayWidth || this.x <=0){
      doIwantToGoX = -doIwantToGoX
      console.log("hit the screen")
      this.x += this.step * doIwantToGoX;
       console.log(this.coloring+"reversed horizontal step")
    }
    this.y += this.step * doIwantToGoY
     if(this.y >= displayHeight || this.y <=0){
       doIwantToGoY = -doIwantToGoY
      console.log("hit the screen")
       this.y += this.step * doIwantToGoY;
      console.log(this.coloring+"reversed vertical step")
     }
    //draw dot again

    this.showUp()
   
  }
}