import React, { useEffect, useState } from 'react'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'
import { slides } from '../slides'

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () =>{
        setCurrentIndex((prevState) => prevState === slides.length - 1 ? 0 : prevState + 1)
    }

    const prevSlide = () =>{
        setCurrentIndex((prevState) => prevState === 0 ? slides.length - 1 : prevState - 1)
    }

    // automatic carousel slides 
    useEffect(() =>{
        const timer = setInterval(() =>{
            nextSlide()
        }, 5000)

        return () =>{
            clearInterval(timer)
        }
    }, [])
    
  return (
    <div className='shop-container mt-5'>
        <div className='w-full h-[50vh] rounded-lg relative group'>
            {
                slides.map((slide, slideIndex) =>(
                    <img className={`absolute w-full h-full object-cover object-top duration-500 rounded-lg ${currentIndex === slideIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} src={slide.image} alt="" />
                ))
            }

            {/* prev btn  */}
            <button onClick={prevSlide} className='absolute top-1/2 translate-y-[-50%] left-4 w-[40px] h-[40px] rounded-full bg-black/20 items-center justify-center z-10 group-hover:flex hidden'><MdArrowBackIos color='#fff' /></button>

            {/* next btn  */}
            <button onClick={nextSlide} className='absolute top-1/2 translate-y-[-50%] right-4 w-[40px] h-[40px] rounded-full bg-black/20 items-center justify-center z-10 group-hover:flex hidden'><MdArrowForwardIos color='#fff' /></button>

            {/* bg overlay  */}
            <div className='bg-black/60 absolute inset-0 rounded-lg flex items-center justify-center'>
                <div className='text-center space-y-4 px-4'>
                <h1 className='text-white text-5xl font-poppins'>Shop<span className='text-shopBlue'>Lane</span></h1>
                <p className='text-white font-roboto text-lg max-w-[800px]'>Upgrade Your Style Game with Our Wide Range of Fashionable Picks: From Classic to Contemporary, We've Got You Covered!</p>
                <button className='bg-shopDarkBlue text-white px-3 py-2 rounded-md'>Shop Now</button>
                </div>
            </div>
            
            {/* dots  */}
            <div className='absolute bottom-5 flex gap-5 left-1/2 translate-x-[-50%]'>
                {slides.map((slide, slideIndex) =>(
                    <div role='button' onClick={() => setCurrentIndex(slideIndex)} className={`w-[10px] h-[10px] rounded-full ${slideIndex === currentIndex ? 'bg-shopDarkBlue' : 'bg-white'}`}></div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Carousel