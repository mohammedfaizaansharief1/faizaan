import React from 'react'
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="container bg-red-500  h-12 p-10 max-w-7xl">
        <div className="logo">
            logo
            {/* <button className='text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"'>Click</button>
            <button className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3'>Click</button> */}
        </div>
        <div className="links">
            <a href="a">About</a>
            <a href="a">Contact</a>
            <a href="a">Blog</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
