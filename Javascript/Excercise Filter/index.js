// Excercise Filter

// 1
let x = [1,2,3,4,5,6,7,8,9]
var r = x.filter(newq);

function newq(z){
    // if(z%2 == 0){
    //     console.log(z)
    // }
    return z%2 == 0;
}
console.log(r)

// 2
let countries = ['INDIA','AMERICA','USA','FRANCE','ITALY','EGYPT'] 
 var newCountries = countries.filter((val)=>{
    return val.length < 6;
 })
 console.log(newCountries)

 // 3
 var countriesNew = countries.filter((s)=>{
    return s.charAt()!="E"
 })
 console.log(countriesNew)

 // 4
 var products= [{product:'sugar',
                price :4},   
                {product:'milk',
                price :10},
                {product:'bread',
                price :30},
                {product:'roti',
                price :4},
                {product:'juice',
                price :50},]

 var newProducts = products.filter((item)=>{
    return item.price < 10
 })
console.log(newProducts)

// 5
let employees = [{adnan:'50000',mansoor:'60000',Mohammed:'90000',Abdullah:'20000'}]
