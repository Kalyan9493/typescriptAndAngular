class Add{
    a:number;
    b:number;
    add(){
        return this.a+this.b;
    }
}

let add=new Add();
add.a=3;
add.b=2;
console.log(add.add());