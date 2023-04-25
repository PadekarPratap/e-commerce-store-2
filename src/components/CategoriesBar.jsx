import React from 'react'

const CategoriesBar = () => {
  return (
    <div className='shop-container'>
        <div className='border-t-2 border-b-2'>
            <ul className='flex items-center justify-center flex-col sm:flex-row gap-[1.5rem] md:gap-[2rem] lg:gap-[6rem] text-lg py-4'>
                <li>All</li>
                <li>Electronics</li>
                <li>Jewelry</li>
                <li>Men's Clothing</li>
                <li>Women's Clothing</li>
            </ul>
        </div>
    </div>
  )
}

export default CategoriesBar