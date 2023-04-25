import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AllProducts from './pages/AllProducts'

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<AllProducts />} />
        </Routes>
    </>
  )
}

export default App