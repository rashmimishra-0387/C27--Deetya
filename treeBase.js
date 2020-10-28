class treeBase{
    constructor(x, y, width, height){
        var options={
            isStatic: true
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body)
        this.tree = loadImage("Images/tree.png");
    }
    display(){
        imageMode(CENTER);
        image(this.tree, this.body.position.x-50, this.body.position.y-270, 500, 650);
    }
}