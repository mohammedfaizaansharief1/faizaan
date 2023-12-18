// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Car from './Car'
import NewChild from './NewChild'
import Button from './Button'
import Child1 from './Child1'
import Obj from './Obj'
//fun={functionProps()}
function App() {
  let obj ={
    num:1,
    str:"String",
    fun:function(){
      // console.log("Hi Hello");
      return "This is a function"
    }
  }
  const funct=()=>{
    console.log("I am click")
  }
  let obj1={
    name:"Abdullah",
    age:20
  }
  return (
    <>
      <h1>Car Brand Name</h1>
      <Car brand="Ford" />
      <Child attr={obj}/>
      <NewChild age="21"/><br></br>
      <Button at={funct}/><br></br>
      <Child1 newAtt="Parent Function"/>
      <Obj attribute={obj1}/>
    </>
  )
}

export default App

// export const Child = ({props},{props2}) => {
//   // const functionProps = () =>{
//   //   {props2.fun}
//   // }
//   return(
//     <>
//       <h1>{props.num}</h1>
//       <p>{props2.str}</p>
//     </>
//   )
// }


function Child(props){
  return(
    <>  
      <h1>{props.attr.num}</h1>
      <h1>{props.attr.str}</h1>
      <h1>{props.attr.fun()}</h1>
    </>
  )
}
// export Child