async function getUser(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users/4')
    let j = await response.json()
    return j
}
getUser().then((json)=>{
    let info1 = document.getElementById('data1')
        info1.innerHTML+=JSON.stringify("Username: " + json.username)
        console.log(json)
})

async function getUser2(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users/3')
    let j = await response.json()
    return j
}
getUser2().then((json)=>{
    let info1 = document.getElementById('data4')
        info1.innerHTML+=JSON.stringify("Username: " + json.username)
        console.log(json)
})

async function getUser3(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users/2')
    let j = await response.json()
    return j
}
getUser3().then((json)=>{
    let info1 = document.getElementById('data7')
        info1.innerHTML+=JSON.stringify("Username: " + json.username)
        console.log(json)
})

async function getComment(){
    let response = await fetch('https://jsonplaceholder.typicode.com/comments/4')
    let j = await response.json()
    return j
}


getComment().then((json)=>{
    let info1 = document.getElementById('data5')
        info1.innerHTML+=JSON.stringify("Comment: " + json.body)
        console.log(json)
})
async function getComment2(){
    let response = await fetch('https://jsonplaceholder.typicode.com/comments/3')
    let j = await response.json()
    return j
}


getComment2().then((json)=>{
    let info1 = document.getElementById('data2')
        info1.innerHTML+=JSON.stringify("Comment: " + json.body)
        console.log(json)
})

async function getComment3(){
    let response = await fetch('https://jsonplaceholder.typicode.com/comments/2')
    let j = await response.json()
    return j
}


getComment3().then((json)=>{
    let info1 = document.getElementById('data8')
        info1.innerHTML+=JSON.stringify("Comment: " + json.body)
        console.log(json)
})

async function getUserAddress(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users/4')
    let j = await response.json()
    return j
}


getUserAddress().then((json)=>{
    let info1 = document.getElementById('data3')
        info1.innerHTML+=JSON.stringify(json.address)
        console.log(json)
})   

async function getUserAddress2(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users/3')
    let j = await response.json()
    return j
}


getUserAddress2().then((json)=>{
    let info1 = document.getElementById('data6')
        info1.innerHTML+=JSON.stringify(json.address)
        console.log(json)
})   

async function getUserAddress3(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users/2')
    let j = await response.json()
    return j
}


getUserAddress3().then((json)=>{
    let info1 = document.getElementById('data9')
        info1.innerHTML+=JSON.stringify(json.address)
        console.log(json)
})   

