let display=document.querySelector(".display");
let buttons=document.querySelectorAll(".btn");
console.log(buttons);
let str="";
// buttons  = Array.from(buttons);
buttons.forEach((el)=>{

    el.addEventListener("click",(e)=>{
        if(e.target.textContent=="="){
            let a=eval(str);
            display.textContent=a;
        }else if(e.target.textContent == 'DEL'){
            str = str.substring(0,str.length-1);
            display.textContent = str;
        }
        else if(e.target.textContent == 'C'){
            str = ''
            display.textContent = str;
        }
        else{
            str +=e.target.textContent;
            display.textContent=str;
           
        }
        

    })
})