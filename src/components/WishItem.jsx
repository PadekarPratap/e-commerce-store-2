import React from 'react'

const WishItem = ({WishItem}) => {

    const handlePrice = (ind) =>{
        const price = WishItem?.price + ''
        const priceArr = price.split(".")
        return priceArr[ind]
    }

  return (
    <div className='flex p-4 md:flex-row flex-col gap-5 md:gap-0'>
        {/* image  */}
        <div className='basis-[25%]'>
            <img className='w-[100px] mx-auto' src={WishItem?.image} alt={WishItem?.title} />
        </div>

        {/* name and description */}
        <div className='basis-[60%]'>
            <h3 className='text-xl font-thin font-poppins'>{WishItem?.title}</h3>
            <p className='text-sm text-gray-500'>{WishItem?.description}</p>
            <p className='text-2xl font-bold font-robotoMono mt-3'><span className='text-sm font-thin text-gray-600'>$</span>{handlePrice(0)}<sup className='text-sm text-gray-600 font-thin'>{handlePrice(1)}</sup></p>

            {/* cart buttons  */}
            <div className='md:space-x-2 space-y-3'>
            <button className='bg-shopBlue text-white px-4 py-1  rounded mr-3 md:mr-0'>Add to Cart</button>
            <button className=' bg-black text-white px-4 py-1 rounded'>Remove from Cart</button>
            <button className='bg-red-500 text-white px-4 py-1 rounded md:hidden'>Remove</button>
            </div>
        </div>
        
        {/* buttons  */}
        <div className='basis-[15%] px-4 space-y-3 items-center justify-center hidden md:flex'>
            <button className='bg-red-500 text-white px-4 py-1 rounded'>Remove</button>
        </div>
    </div>
  )
}

export default WishItem