import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AllProducts from './pages/AllProducts'
import ProductCategoryPage from './pages/ProductCategoryPage'

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<AllProducts />} />
            <Route path='/products/category/:categoryName' element={<ProductCategoryPage />}  />
        </Routes>
    </>
  )
}

export default App