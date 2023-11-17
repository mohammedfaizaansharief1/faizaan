let button = document.querySelector('button')

function apicall(url,callback){
    let xhr = new XMLHttpRequest();
    // console.log(xhr)

    xhr.responseType = 'json'
    xhr.onprogress = function (){
        console.log("Loading...")
    }
    xhr.onload = function (){
        console.log(xhr.response)
    }
    // xhr.open('GET','https://dummyjson.com/products')
    xhr.open('GET',url)
    xhr.send();
}

button.addEventListener('click',function(){
    apicall('https://dummyjson.com/users',(data)=>{
        console.log(data)
        apicall(`https://dummyjson.com/users/${data.users[1].id}`,(userdata)=>{
            console.log(userdata)
            apicall(`https://dummyjson.com/users/${userdata.id}/todos`,(username)=>{
                console.log(username)
            })
        })
    })
})