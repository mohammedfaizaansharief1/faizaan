import React from 'react'
// import { Link } from "react-router-dom"
// import {Link} from 'react-dom'

function Navbar() {
  return (
    <div className='bg-black w-screen p-5 flex justify-between'>
      <div>
        <a href="Logo" className='text-white hover:underline hover:underline-offset-8 p-1'>Logo</a>
      </div>
      <div className='flex gap-10 '>
        {/* <Link to="/">Home</Link> */}
        <a href="Home" className='text-white hover:bg-white hover:text-black hover:border-red-600 p-1 hover:rounded-sm'>Home</a>
        <a href="about" className='text-white hover:bg-white hover:text-black hover:border-red-600 p-1 hover:rounded-sm'>About</a>
        <a href="contact" className='text-white hover:bg-white hover:text-black hover:border-red-600 p-[4px] hover:rounded-sm'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar

      // <div className="container bg-red-500  w-auto p-10 m-10 border-2 border-black">
      //   <div className="logo">
      //       logo
      //       {/* <button className='text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"'>Click</button>
      //       <button className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3'>Click</button> */}
      //   </div>
      //   <div className="links">
      //       <a href="a">About</a>
      //       <a href="a">Contact</a>
      //       <a href="a">Blog</a>
      //   </div>
      // </div>