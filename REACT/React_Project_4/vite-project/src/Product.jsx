import React from 'react'
import { Link } from 'react-router-dom';

function Product() {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);
  return (
    <div>
      <Link to={'products'}/>
    </div>
  )
}

export default Product
