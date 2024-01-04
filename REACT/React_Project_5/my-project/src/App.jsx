import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <h1 className='bg-red-500'>Heading</h1>
    <Footer/>
    </>
  )
}

export default App
