let button = document.querySelector('button')

function apicall(url,callback){
    let xhr = new XMLHttpRequest();
    // console.log(xhr)

    xhr.responseType = 'json'
    xhr.onprogress = function (){
        console.log("Loading...")
    }
    xhr.onload = function (){
        // console.log(xhr.response)
        callback(xhr.response)

    }
    // xhr.open('GET','https://dummyjson.com/products')
    xhr.open('GET',url)
    xhr.send();
}

button.addEventListener('click',function(){
    apicall('https://dummyjson.com/users',(data)=>{
        console.log(data.users)
        data.user.map((e)=>{
            return e
        })

    })
})