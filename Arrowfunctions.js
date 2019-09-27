function normal(x,y){
    console.log(x+y)
}

//arrow function way

let a=(x,y)=>{console.log(x+y)}
let a2=(x,y)=>console.log(x+y)
let a3=x=>console.log(x)

normal(2,3)
a(2,3)
a2(2,3)
a3(10)

let r=[1,2,33]

r.forEach((v,i)=>console.log(v))

