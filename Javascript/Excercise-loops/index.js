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
var len=countries.length
console.log(len)

