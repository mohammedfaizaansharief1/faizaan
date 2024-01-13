import React from 'react'
import './Header.css'
import Links from './Links'
import Icons from './Icons'


const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        Sneaker <div className='dot'>.</div>
      </div>
      <Links/>
      <Icons/>
    </div>
  )
}

export default Header
