/*
async await is a more easy way to handle promises
it works asynchronusly
*/
async function fetchusers(){ 
        let res=await fetch('https://api.github.com/users') //fetch returns promise
        let data=await res.json()   //res.json() returns promise
        let res2=await fetch('https://api.github.com/emojis')
        let data2=await res2.json()
        console.log(data)
        console.log(data2)   
}
fetchusers()