let h1 = document.querySelector('h1')
let inp = document.querySelector('input')
let btn = document.querySelector('button')
let list = document.querySelector('.list')

let data = []
window.onload = ()=>{
    data =JSON.parse(localStorage.getItem('data')) || []
    let items =data.map((e,i)=>{

        let item = `<div class='item'><p>${e}</p><button onclick="deletee(${i})">DEL</button></div>`

        return item
    })
    list.innerHTML = items.join('')
}

let inpData = ''
inp.addEventListener('keyup',(e)=>{
    inpData = e.target.value
})


btn.addEventListener('click',(e)=>{
    data.push(inpData)
    localStorage.setItem('data',JSON.stringify(data))
    let items =data.map((e,i)=>{
        
        let item = `<div class='item'><p>${e}</p><button onclick="deletee(${i})">DEL</button></div>`
        return item
    })
    list.innerHTML = items.join('')
    inp.value =''
    
})

function deletee(i){
    data =JSON.parse(localStorage.getItem('data'))
    data.splice(i,1)
    localStorage.setItem('data',JSON.stringify(data))
    let items =data.map((e,i)=>{

        let item = `<div class='item'><p>${e}</p><button onclick="deletee(${i})">DEL</button></div>`

        return item
    })
    list.innerHTML = items.join('')



}

// data.push({title:inp1,desc:inp2})