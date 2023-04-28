import { createSlice } from "@reduxjs/toolkit";

const getWishList = () =>{
    const wishList = JSON.parse(sessionStorage.getItem("Cart"))
    if(wishList){
        return wishList
    }else{
        return []
    }
}

const initialState ={
    wishList: getWishList()
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        ADD_TO_WISHLIST: (state, action) => {
            const length = state.wishList.length
            if(length){
                const index = state.wishList.findIndex((item) => item.id === action.payload.id)
                if(index === -1){
                    state.wishList.push(action.payload)
                    sessionStorage.setItem('Cart', JSON.stringify(state.wishList))
                }
            }else{
                state.wishList.push(action.payload)
                sessionStorage.setItem('Cart', JSON.stringify(state.wishList))
            }
        },
        REMOVE_FROM_WISHLIST: (state, action) =>{
            state.wishList = state.wishList.filter((item) => item.id !== action.payload.id)
            sessionStorage.setItem('Cart', JSON.stringify(state.wishList))
        }
    }
})

export const {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} = cartSlice.actions
export default cartSlice.reducer