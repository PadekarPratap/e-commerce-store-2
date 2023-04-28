import React from 'react'
import Navbar from '../components/Navbar'
import CategoriesBar from '../components/CategoriesBar'
import TitleBar from '../components/TitleBar'
import WishList from '../components/WishList'

const WishListPage = () => {
  return (
    <div>
        <div className='fixed inset-0 bg-black/5 z-[-10]'></div>
        <Navbar />
        <CategoriesBar />
        <TitleBar title={"My Wish List"} />
        <WishList />
    </div>
  )
}

export default WishListPage