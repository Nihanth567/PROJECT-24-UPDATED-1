class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5

        }

        //this.paper.circle(x,y,radius,options);
        this.paper = Bodies.circle(x, y, radius, options);
        this.image = loadImage("sprites/paper.png")
       this.radius = 70;

       World.add(world,this.paper)
        
       
    }

    display(){
       //var pos = this.body.position;
      // var angle = this.body.angle;
       
        //push();
       //translate(pos.x,pos.y);
        //rotate(angle);
       
       // imageMode(RADIUS);
        image(this.image,this.paper.position.x, this.paper.position.y,this.radius,this.radius);
        // image(this.image, , 50, 50);
        //pop();
    }

}