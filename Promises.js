/*
promises are similar to callbacks where we can make a piece of code after a certain thing happen
*/
function fetchusers(){
    return new Promise((resolve,reject)=>{
          fetch('https://api.github.com/users')
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
                resolve(data)
            })
             .catch(err=>reject(err))
    })
}
function fetchemojis(){
    fetch('https://api.github.com/emojis')
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
    })
     .catch(err=>console.log(err))
}

fetchusers().then(fetchemojis).catch(err=>{console.log(error)})