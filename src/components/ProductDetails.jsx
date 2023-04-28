import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { BASE_URL, ENDPOINTS } from '../api/Endpoints'
import {RiStarSFill} from 'react-icons/ri'
import { SpinningCircles } from 'react-loading-icons'

const ProductDetails = () => {

    const {id} = useParams()
    const {data: prdDetails, loading} = useFetch(BASE_URL + ENDPOINTS.PRODUCT_DETAILS + id)

    if(loading) {
        return(
            <div className='h-[80vh]'>
               <div className='mt-[5rem]'>
               <SpinningCircles stroke='#06bcee' fill='#06bcee' className='mx-auto' />
                <p className='text-center text-xl font-bold text-[#06bcee] mt-2'>Loading...</p>
               </div>
            </div>
        )
    }


  return (
    <div className='shop-container mt-10 min-h-[80vh]'>
        <div className='grid md:grid-cols-2 gap-4'>
            <div>
                <figure>
                    <img className='max-w-[350px] max-h-[400px] mx-auto' src={prdDetails?.image} alt={prdDetails?.title} />
                </figure>
            </div>
            <div>
                <h3 className='uppercase font-roboto text-gray-500 font-semibold'>{prdDetails?.category}</h3>
                <h2 className='text-3xl md:text-5xl font-thin mt-2 md:mt-5'>{prdDetails?.title}</h2>

                {/* rating  */}
                <div className='mt-5'>
                    <p className='text-xl font-bold'>Rating{prdDetails?.rating?.rate}<RiStarSFill className='inline' size={25} /><span className='font-thin'>({prdDetails?.rating?.count})</span></p>
                </div>

                {/* price  */}
                <div className='mt-8'>
                    <p className='text-4xl font-bold'>$ {prdDetails?.price}</p>
                </div>

                {/* description  */}
                <p className='text-lg text-gray-500 mt-5'>{prdDetails?.description}</p>


                {/* buttons  */}
                <div className='space-x-3 my-8'>
                    <button className='border-black border-2 px-4 py-2 rounded'>Add to Cart</button>
                    <button className='bg-black text-white px-4 py-2 rounded'>Go to Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails