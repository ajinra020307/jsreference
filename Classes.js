//class

class Rectangle{
    //constructor function adds properties to class
    constructor(length,breadth,color){
        this.length=length;
        this.breadth=breadth;
        this.color=color;
    }
   //methods in class 
    area(){
        return this.length*this.breadth
    }
    summary(){
        return (`iam a rectangel with length and breadth ${this.length} ${this.breadth} and area of ${this.area()}`)
    }
}
let r1=new Rectangle(10,20,'red')  //creating an instance of class
console.log(r1.summary())

//class inheritence

class Triangle extends Rectangle{
    constructor(length,height){
        super(length)   //length property inherited from Base Rectanfgle class
        this.height=height;
    }
    //polymorphism rewriting existing methods
    area(){
        return (1/2 )*this.length*this.height
    }
    summary(){
        return (`iam a rectangel with length and height ${this.length} ${this.height} and area of ${this.area()}`)
    }
    
}

let t1=new Triangle(10,10)
console.log(t1.summary())