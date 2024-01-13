import React from 'react'
import './Icons.css'
// import search from './assets/search.png'

const Icons = () => {
  return (
    <div className='icons'>
      <img src="public/search.png" alt="" />
      <img src="public/login.png" alt="" />
      <img src="public/wishlish.png" alt="" />
      <img src="public/bag.png" alt="" />
      
    </div>
  )
}

export default Icons

// Instead of /public/wishlish.png, use /wishlish.png.
// Files in the public directory are served at the root path.
// Instead of /public/bag.png, use /bag.png.