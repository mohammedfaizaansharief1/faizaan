// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Car from './Car'

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
  return (
    <>
      <h1>Car Brand Name</h1>
      <Car brand="Ford" />
      <Child attr={obj}/>
      <New s="name"/>
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

function New(props="string"){
  return {props}
}