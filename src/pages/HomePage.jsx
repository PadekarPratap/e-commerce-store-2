import React from 'react'
import Navbar from '../components/Navbar'
import CategoriesBar from '../components/CategoriesBar'
import Carousel from '../components/Carousel'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <CategoriesBar />
        <Carousel />
    </div>
  )
}

export default HomePage