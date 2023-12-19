import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* create different component for all  */}
      <div className='container'>
        <div className="childContainer">
          <div className="left">

          </div>
          <div className="right">

          </div>
        </div>
      </div>
    </>
  )
}

export default App
