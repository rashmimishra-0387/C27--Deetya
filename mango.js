class Mango{
    constructor(x, y, r){
        var options={
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
        this.mango = loadImage("Images/mango.png");
        this.radius = r;
    }
    display(){
        imageMode(CENTER);
        image(this.mango, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}