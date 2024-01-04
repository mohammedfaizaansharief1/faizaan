import React from 'react'
import Home from './Home'
import Shop from './Shop'
import Products from './Products'
import Pages from './Pages'
import Blog from './Blog'
import Elements from './Elements'
import './Links.css'

const Links = () => {
  return (
    <div className='links'>
      <Home />
      <Shop/>
      <Products/>
      <Pages/>
      <Blog/>
      <Elements/>
    </div>
  )
}

export default Links
