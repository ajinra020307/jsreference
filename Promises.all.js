/*
promises.all takes an array of promisrs as parameter
and returns the data as an array in the order of the parameter passed
*/

function fetchusers(resolve,reject){
    fetch('https://api.github.com/users')
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        resolve(data)
    })
     .catch((err)=>{
        reject(err)
    })
}
function fetchemojis(resolve,reject){
    fetch('https://api.github.com/emojis')
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        resolve(data)
    })
    .catch((err)=>{
        reject(err)
    })
}
let p1=new Promise(fetchusers)
let p2=new Promise(fetchemojis)
Promise.all([p1,p2])
 .then(data=>{
    console.log(data)
})