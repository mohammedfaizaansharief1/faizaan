let container = document.querySelector('.container')
// let orderList = document.querySelector('.ordlist')
let table = document.querySelector('.table')
let tbody = document.querySelector('.body')
// let td = document.querySelector('#1')


fetch('https://restcountries.com/v2/all')
.then((data)=>{
    return data.json()
})
.then((data1)=>{
    console.log(data1)
    let userData = data1
    
    // let newUserData = data1
    // userData = data1
    userData.map((e)=>{
        console.log(e)
    })
    // container.innerHTML= `<li>Hi</li>`
    // container.textContent
    // orderList.innerHTML = `<li>Hi</li><li>Hi</li>`
    
    userData.map(element => {
        // let listval = document.createElement('li')
        let langs = element.languages.map((l)=>{
            return l.name
        })
        // let languages = element.languages
        
        tbody.innerHTML = document.createElement("tr")
        tbody.innerHTML = `
                            <td id="td">${element.name}</td>
                            <td id="2">${element.capital}</td>
                            <td id="3">${langs.toString()}</td>
                            <td id="4">${element.population}</td>`
        
        
        
                            // `${element.name}
                            // ${element.capital}
                            // ${langs.toString()}
                            // ${element.population}`
        
        // orderList.appendChild(listval)
        table.appendChild(tbody)


        // td.innerHTML = `<td>${element.name}</td>`
    });

    // var table = document.createElement("table")
    // table.setAttribute("id","myTable")
    // document.body.appendChild(table)

    // var y = document.createElement("tr")
    // y.setAttribute("id","myTR")
    // document.getElementById("myTable").appendChild(y)

    // var z = document.createAttribute("td")
    // z.
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