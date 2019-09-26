/*
callbacks are used to run a piece of code asynchronously
if you want to execute a function after a function completes you might use callbacks
*/

function fetchusers(callback){
    fetch('https://api.github.com/users')
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        callback()
    })
}

function fetchemojis(){
    fetch('https://api.github.com/emojis')
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
    })
}
fetchusers(fetchemojis)//this runs only in browsers fetch is not supported in node