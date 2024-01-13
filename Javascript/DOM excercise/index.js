let arr=[1,2,3,4]
let ul =document.createElement('ul')
let li=document.createElement('li')

ul.appendChild(li)

// li.innerHTML=li

for(let i=0;i<arr.length;i++){
    ul.innerHTML=arr[i]
}