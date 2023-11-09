// Reduce
// 1
let numbers = [1,2,3,4,5,6,7,8,9,10]
let newNumbers = numbers.reduce((t1,t2)=>{
    return  t1 + t2;
})
console.log(newNumbers)

// 2
let strings = ['Car ','Ball ','Cat ','Dog']
let newStrings = strings.reduce((v1,v2)=>{
    // return v1 + v2;
    return v1.concat(v2);
})
console.log(newStrings)

// 3
let array = [
    {product:'sugar',price:40},
    {product:'curd',price:80},
    {product:'milk',price:50},
    {product:'lemon',price:10}
]
let newArray = array.reduce((n1,n2)=>{
    let sum = n1 + n2.price
    // console.log(n1)
    // console.log(n2)
    return sum
},0)
console.log(newArray)

// 4
// let transactions = [ { type: "debit", amount: 50 }, { type: "credit",amount: 100 }, { type: "debit", amount: 30 }, ];
// let acbalancr = transactions.reduce((balance, transactions)=>{
//     if(transactions.credit){
//         return balance - transactions.debit
//     }
//     else if(transactions.type == 'credit'){
//         return balance + transactions.credit
//     }
// },0);
// console.log(acbalancr)

// 4
let transactions = [
    {debit:50},
    {credit:40},
    {credit:100},
    {debit:30}
]
let acbalancr = transactions.reduce((balance, tr)=>{
    if(tr.debit){
        return balance - tr.debit
    }
    else if(tr.credit){
        return balance + tr.credit
    }
},0);
console.log(acbalancr)