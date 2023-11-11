
let para = document.querySelector('#p1')

let para1 = document.querySelector('#p1')
let para2 = document.querySelector('#p2')
let para3 = document.querySelector('#p3')
let para4 = document.querySelector('#p4')

let paragraph = document.querySelectorAll('p')

para1.setAttribute('class','para')
para2.setAttribute('class','para')
para3.setAttribute('class','para')
para4.setAttribute('class','para')

para1.style.background = "beige";
para1.style.color = "blue";
para1.style.fontSize = "25px";
para1.style.border = "2px solid black";
para1.style.borderRadius = "10px";
para1.style.fontFamily = "Ubuntu"


para2.style.background = "beige";
para2.style.color = "blue";
para2.style.fontSize = "25px";
para2.style.border = "2px solid black";
para2.style.borderRadius = "10px";
para2.style.fontFamily = "Ubuntu"

para3.style.background = "beige";
para3.style.color = "blue";
para3.style.fontSize = "25px";
para3.style.border = "2px solid black";
para3.style.borderRadius = "10px";
para3.style.fontFamily = "Ubuntu"


para4.style.background = "beige";
para4.style.color = "blue";
para4.style.fontSize = "25px";
para4.style.border = "2px solid black";
para4.style.borderRadius = "10px";
para4.style.fontFamily = "Ubuntu"

let h = document.querySelector('h1')
let colors = ['blue','green','red','yellow','gray','tomato','teal']
console.log(colors.length)
// var 
// colors.forEach((color)=>{


//     console.log(color)
// })

let i=0;
setInterval(() => {
   h.style.color = colors[i]
//    i++;
  
     i = (i + 1) % colors.length
}, 1000);