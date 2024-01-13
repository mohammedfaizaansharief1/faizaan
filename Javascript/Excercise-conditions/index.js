// 1
let a=100,b=200;

if(a>b){
    console.log('a is greater than b');
}
else{
    console.log('a is less than b');
}

// 2
var result=a>b?'a is greater than b':'a is less than b';
console.log('Ternary operator output:',result);

if(a%2 == 0){
    console.log(a,'is a even number');
}
else{
    console.log(a,'is a odd number');
}

// 4
function fun(a,b,c){
    if(a>b && a>c){
        console.log(a,'is largest')
    }else if(b>a && b>c){
        console.log(b,'is largest')
    }
    else{
        console.log(c,'is largest')
    }
}
fun(5,6,1)


//2nd Excercise

let obj={
    admin:['create','read','update','delete'],
    user:['read','update'],
    guest:['read']
}
// console.log(obj['admin2'])
function fun1(user,role){
    let permission=false;
    if(obj[user]!=undefined){
      permission=obj[user].includes(role);
    }
    // return permission;
    if(permission==true){
        console.log('Permission granted')
    }
    else{
        console.log('Permission denied')
    }   
}

fun1("admin","read")
fun1("user","read")
fun1("guest","create")

// let price=50
function new1(price){
      if(price >= 50){
        let finalprice= (price/100) * 10
        let actualprice= price - finalprice
        console.log('Final Price:',actualprice)
      }
      else{
        console.log('No discount is applied')
      }
}

new1(60)