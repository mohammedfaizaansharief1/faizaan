let button = document.querySelector('#btn')

function apicall(url){
    let xhr = new XMLHttpRequest()
    // console.log(xhr)

    xhr.responseType = 'json'
    xhr.onprogress = function(){
        console.log('Loading..')
    }
    let promise = new Promise(function (resolve,reject){
        xhr.onload = function(){
            resolve(xhr.response)
        }
        xhr.onerror = function(){
            reject('ERROR')
        }
    })
    xhr.open('GET',url)
    xhr.send()
    return promise
}
// let link = "https://dummyjson.com/carts"
// apicall('https://dummyjson.com/carts/1')
// .then((data)=>{console.log(data)})
// apicall('https://dummyjson.com/carts/2')
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log('error')})
// .finally((data)=>{console.log("data")})
let totalAmt=0;
apicall('https://dummyjson.com/carts/1')
.then(
    (data)=>{
    //  console.log(data.total);
     totalAmt=totalAmt+data.total;
     console.log(totalAmt)
     return apicall('https://dummyjson.com/carts/2')
    })
// apicall('https://dummyjson.com/carts/2')
.then((data2)=>{console.log(data2)
    totalAmt+=data2.total;
    return totalAmt;
})
.then((amt)=>{
    console.log(amt)
})
.catch((err)=>{console.log('error')})
// .finally((data)=>{console.log("data")})


// let bl=true;
// let promise=new Promise((res,rej)=>{
//     if(bl){
//         res("asj");
//     }else{
//         rej("rejected")
//     }
// })
// promise
// .then((data)=>{
//     console.log(data)
//     return 34;
// }).then((data1)=>{
//     console.log(data1)
//     return "This is a "
// }).then((data2)=>{
//     console.log(data2)
// }).catch((err)=>{
//     console.log(err)
// })

