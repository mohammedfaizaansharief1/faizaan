// 3
// let age=prompt("Enter Your age:")
// if(age>=18){
//     document.write('You are old enough to drive')
// }
// else{
//     let res =18-age;
//     document.write('wait for ',res, ' years');
// }
// 5
let dayVar=prompt("Enter the day:")
// let condition= day.toLowerCase()
dayVar=dayVar.toLowerCase()
let day=dayVar
switch(day){
    case 'monday':
        document.write( day ,'is a working day')
        break
    case 'tuesday':
        document.write( day ,'is a working day')
        break
    case 'wednesday':
        document.write( day ,'is a working day')
        break
    case 'thursday':
        document.write( day ,'is a working day')
        break
    case 'friday':
        document.write( day ,'is a working day')
        break
    case 'saturday':
        document.write( day,'is a working day')
        break
    case 'sunday':
        document.write( day,'is a not working day')
        break
    default: 
        document.write('Enter correct day name')
        break
}