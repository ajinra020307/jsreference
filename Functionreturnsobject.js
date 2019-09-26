/*
the function takes some parameters and returns a new object every time the fuction is called
*/

function returncircle(radius,color){
    let circle={
        radius:radius,
        color:color,
        area:function(){
            return Math.PI*radius*radius
        }
    }
    return circle
}
let c1=returncircle(20,'red')
let c2=returncircle(10,'blue')
console.log(c1)
console.log(c2.area())