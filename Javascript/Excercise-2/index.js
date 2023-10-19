var str1="Hi hello how are you"
var str2="hello world"
console.log(str1.toUpperCase());
console.log(str2.toLowerCase());

console.log(str2.slice(6));
var str3='Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'
console.log(str3.split(','))
console.log(str3.indexOf('o'))
// console.log(str3.indexOf('n'))
console.log(str3.lastIndexOf('k'))

var str4='Javascript is used'
var str5=' to add functionalities to the web app'
// console.log(str4.concat(str5))
console.log(str4 + str5)
var str6=`This course is all about Javascript.`
console.log(str6.includes('Javascript'))

console.log(Math.random()*100)
// console.log(Math.random(50)*100)
console.log(Math.floor(Math.random()*(100-50)+1)+50);

console.log('1','1','1','1','1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')
// console.log('2','2','2','2','2\n')
var str7='He earns 50000 from salary per month,10000 annual bonus.'
// console.log(str7.substring(9,14)*12+10000)
// console.log(str7.substring(9,14))
var ls=str7.substring(9,14)*12+10000
console.log(ls)
// console.log(str7.match(/[0-9]+/g)*10000)
console.log(str7.match(/[0-9]+/g))