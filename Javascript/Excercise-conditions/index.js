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