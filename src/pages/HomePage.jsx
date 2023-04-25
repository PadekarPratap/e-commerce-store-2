import React from 'react'
import Navbar from '../components/Navbar'
import CategoriesBar from '../components/CategoriesBar'
import Carousel from '../components/Carousel'
import useFetch from '../hooks/useFetch'
import Categories from '../components/Categories'

const HomePage = () => {

  return (
    <div>
        <Navbar />
        <CategoriesBar />
        <Carousel />
        <Categories />
    </div>
  )
}

export default HomePage