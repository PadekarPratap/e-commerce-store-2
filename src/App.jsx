import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AllProducts from './pages/AllProducts'
import ProductCategoryPage from './pages/ProductCategoryPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import WishListPage from './pages/WishListPage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<AllProducts />} />
            <Route path='/products/category/:categoryName' element={<ProductCategoryPage />}  />
            <Route path='/products/:id' element={<ProductDetailsPage />}  />
            <Route path='/wishlist' element={<WishListPage />}  />
        </Routes>
        <Toaster position='bottom-right' />
    </>
  )
}

export default App