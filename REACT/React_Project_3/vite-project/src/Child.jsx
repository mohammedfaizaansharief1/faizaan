// import React from 'react'
import './Child.css'
import Left from './Left'
import Right from './Right'

export default function Child() {
  return (
    <div className='childContainer p-[100px]'>
      <Left />
      <Right />
    </div>
  )
}
