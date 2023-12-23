import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <>
        <Header />
      <div>
        <h1>React Project</h1>
        <Link to="/about" className='border-2 text-green-600 m-12'>About</Link>
      </div>
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
