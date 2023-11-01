console.log('Even Numbers')
for(let i=0;i<=101;i++){
    if(i%2==0){
        console.log(i)
    }
}
console.log('Odd Numbers')
for(let i=0;i<=101;i++){
    if(i%2!=0){
        console.log(i)
    }
}


console.log('sum of numbers')
let sum =0;
for(let i=0;i<101;i++){
    sum+=i;
}
console.log(sum)


// console.log('sum of even numbers')
let evensum =0, oddsum=0;
for(let i=0;i<101;i++){
    if(i%2==0){
        evensum+=i;
    }
}
// console.log(evensum)
console.log('sum of even Numbers: ',evensum)

// console.log('sum of odd numbers')
for(let i=0;i<101;i++){
    if(i%2!=0){
        oddsum+=i;
    }
}
// console.log(oddsum)
console.log('sum of Odd Numbers: ',oddsum)

// let arr=[oddsum,evensum]
// console.log(arr)
var op=new Array;
op.push(oddsum)
op.push(evensum)
console.log('OP:',op)
// console.log('OP:'+op)

console.log()
var countries=["ALBANIA","BOLIVIA","CANADA","DENMARK","ETHIOPIA","FINLAND","GERMANY","HUNGARY","IRELAND","JAPAN","KENYA"]
// var len=countries.length
// var arr2=[len]
// console.log(arr2)


// let lnght = '';
// let longest;
    
// for(let i=0; i<countries.length; i++){
//   if(countries[i].length > lnght) {
//     let lnght = countries[i].length;
//     longest = countries[i];
//   }
// }
    
// console.log(longest);

var countriesLength =[]
for(let i=0;i<countries.length;i++){
    var len=countries[i].length;
    countriesLength.push(len)
    
    // countriesLength.push(countries.length)
}
console.log(countriesLength)

// var a=Math.max(countriesLength)
// console.log(a)

var long=countries.reduce(function(a,b){
    return a.length>b.length ? a:b;
});
console.log(long)

var big=function(){
    return countries.reduce(function(a,b){
        return a.length>b.length?a:b;
    });
}
console.log(big())