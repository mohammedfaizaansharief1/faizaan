
fetch('https://restcountries.com/v2/all')
.then((data)=>{
    return data.json()
})
.then((data1)=>{
    console.log(data1[0])
})

//
// apicall('ht....',(data)=>{
//     console.log(data.users)
//     let dataUser = data.users
//     console.log(dataUser[0])
// })

// dataUser.map((users)=>{
//     apicall(`htpp.../$dataUser.users`,())
// })