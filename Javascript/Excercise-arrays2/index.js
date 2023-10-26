var shoppingCart = ['Milk','Coffee','Tea','Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(4,1)
shoppingCart[3]='Green Tea'
console.log(shoppingCart)

countries=['usa','china']
// countries.includes('india') ? console.log('INDIA') : console.log(countries.push('india')) 
// console.log(countries.includes('india'))
if(countries.includes('india')){
    console.log('INDIA')
}
else{
    console.log(countries.push('india'))
}


var cour1=['HTML','CSS','JS','React']
var cour2=['Node','Express','MongoDB']
var fullstack=cour1.concat(cour2)
console.log(fullstack)

