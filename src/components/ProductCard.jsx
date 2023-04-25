import React from 'react'
import { Rating } from 'react-simple-star-rating'
import {HiShoppingCart} from 'react-icons/hi'
import {BsFillHeartFill} from 'react-icons/bs'


const ProductCard = ({product}) => {

    const ProductPrice = (index) =>{
       const price = product.price + ''
       return price.split(".")[index]
    }

  return (
    <div className='max-w-[350px] min-h-[400px] border-2 rounded-lg relative'>

        {/* product card image  */}
        <div className='p-4'>
            <img className='max-w-[200px] h-[250px] mx-auto' src={product.image} alt="" />
        </div>

        {/* card content  */}
        <div className='px-4 pb-4 space-y-2'>

            {/* product name  */}
            <p className='truncate'><span className='font-bold text-lg'>Brand,</span> <span className='font-thin text-lg'>{product.title}</span></p> 

            {/* product rating and rating count       */}
            <div className='flex items-center gap-2'>
            <Rating SVGstyle={{display: 'inline'}} allowFraction size={18} readonly={true} initialValue={product.rating.rate}/>
            <p className='font-thin'>({product.rating.count})</p>
            </div>

            {/* product price  */}
            <div className='space-x-1'>
                <span className='font-thin text-slate-600'>$</span>
                <span className='text-2xl font-semibold font-poppins'>{ProductPrice(0)}</span>
                <sup className='font-thin text-slate-600'>{ProductPrice(1)}</sup>
            </div>

            {/* add to cart button  */}
            <div>
                <button className='w-full py-2 bg-shopDarkBlue text-white rounded-md'><HiShoppingCart className='inline mr-2' />Add to cart</button>
            </div>
        </div>

        {/* heart favourite icon  */}
        <div className='absolute top-3 right-3 cursor-pointer' role='button' >
            <BsFillHeartFill color='#464649' />
        </div>

    </div>
  )
}

export default ProductCard