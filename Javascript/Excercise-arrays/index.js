let arr1=[]
let arr2=[1,2,1113,4,5]
let len=arr2.length
let mixedDataTypes=[1,'a',2.8,'w',8,'o']
var itCompanies=['facebook','Google','microsoft','Apple','IBM','Oracle','Amazon']
// console.log(arr1)
console.log(arr2.length)
console.log(arr2[0])
console.log(arr2[Math.floor(arr2.length/2)])
console.log(arr2[len-1])
console.log(mixedDataTypes.length)
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length/2)])
console.log(itCompanies[itCompanies.length-1])
for(var i=0;i<itCompanies.length-1;i++){
    console.log(itCompanies[i].toUpperCase())
}
// for(var i=0;i<itCompanies.length-1;i++){
//     console.log(itCompanies[i].join(','))
// }
console.log(itCompanies.join(","))
for(var i=0;i<itCompanies.length-1;i++){
    if(itCompanies[i]=='Apple'){
        console.log(itCompanies[i])
        // break
    }
    // else{
    //     console.log('company not found')
    // }
}
// console.log(itCompanies.includes("Apple"))