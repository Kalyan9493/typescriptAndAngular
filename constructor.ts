class Point1{
    x:number;
    y:number;

    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }

    draw(){
        console.log('X is :'+this.x+' Y is:'+this.y);
    }

}

let point1=new Point1(1,2);

point1.draw();
