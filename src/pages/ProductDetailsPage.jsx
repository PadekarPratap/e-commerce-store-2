import React from 'react'
import Navbar from '../components/Navbar'
import CategoriesBar from '../components/CategoriesBar'
import ProductDetails from '../components/ProductDetails'
import GoBackBtn from '../components/GoBackBtn'
import Footer from '../components/Footer'

const ProductDetailsPage = () => {
  return (
    <div>
        <Navbar />
        <CategoriesBar />
        <GoBackBtn />
        <ProductDetails />
        <Footer />
    </div>
  )
}

export default ProductDetailsPage