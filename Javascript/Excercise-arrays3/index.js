var ages=[19,22,19,24,20,25,26,24,25,24]
console.log('array:',ages)
let a=ages.sort()
console.log('sorted array:',a)

let minage=Math.min(...a)
console.log('Minimum Age:',minage)
let maxage=Math.max(...a)
console.log('Maximum Age:',maxage)

var median=a[(a.length)/2]
console.log('Median Age:',median)

var sum=0
for(let i=0;i<ages.length;i++){
    sum+=ages[i]
}
var avg=sum/ages.length;
console.log('Average Age:',avg)
var range=maxage - minage;
console.log('Range:',range)

let math=Math.abs(minage-avg)
console.log('min-average:',math)
let math2=Math.abs(maxage-avg)
console.log('max-average:',math2)

// word game
var arr1=['Word1','cat','Word3','mat']
// var arr3=[]

// function arr(arr1){
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i].length>3){
//             // var arr2=[arr1[i]]
//             arr3.push(arr1[i]);
//         }
//     }
// }

// arr(arr1)
// console.log(arr3)
// console.log(arr2)

var arr3 = arr1.map((elem)=>{
    return elem.length>3
})
console.log(arr3)


function aoo(arr1){
    return arr1.
}