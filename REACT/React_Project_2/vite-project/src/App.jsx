// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Car from './Car'
import NewChild from './NewChild'
import Button from './Button'
import Child1 from './Child1'
import Obj from './Obj'
import Child2 from './Child2'
import Form from './Form'
import { useState } from 'react'

//fun={functionProps()}
function App() {
  // const [count,setcount] = useState(0);

  let obj ={
    num:1,
    str:"String",
    fun:function(){
      // console.log("Hi Hello");
      return "This is a function"
    }
  }
  const [count,setCount] = useState(0)
  const funct=()=>{
    console.log("I am click")
    setCount(count + 1)
  }
  let obj1={
    name:"Abdullah",
    age:20
  }

  let object={
    name:"Shah*$",
    age:"20"
  }

  let a=20

  const [parentData,setParentData] = useState("")
  const sendParentData=()=>{
    setParentData("This is commig from Parent")

  }

  
  return (
    <>
      <h1>Car Brand Name</h1>
      <Car brand="Ford" />
      <Child attr={obj}/>
      <NewChild age="21"/><br></br>
      <Button at={funct} count={count}/><br></br>
      <Child1 newAtt="Parent Function"/>
      <Obj {...object}/>

      {/* conditional rendering */}
      {a%2==0 ? <Child2/> :<p>No</p>} 

      {/* Q-8 */}
      <button onClick={sendParentData}>Send data from child</button>
      <Form parentData={parentData}/>
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