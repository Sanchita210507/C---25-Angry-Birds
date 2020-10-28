class BaseClass{
    constructor(x, y, width, height,angle){
        var options = {
            restitution: 1.0,
            friction:2.0,
            density:1.0
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x, y, width, height, options) ;
        this.image = loadImage("sprites/base.png")
        World.add(world,this.body)
    }
    display(){
        
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width, this.height)
        pop()
    }
}