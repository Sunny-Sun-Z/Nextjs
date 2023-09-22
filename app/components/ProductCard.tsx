//'use client';  // auto become client

import Link from 'next/link'
import React from 'react'
import AddToCart from './AddToCart'
//import styles from './ProductCard.module.css'  without using this, directly use tailwindcss below

const ProductCard = () => {
  return (
    // <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>  
    <div>       
        <AddToCart></AddToCart>
    </div>
  )
}

export default ProductCard
