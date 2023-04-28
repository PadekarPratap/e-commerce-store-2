import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    wishList: []
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
                }
            }else{
                state.wishList.push(action.payload)
            }
        },
        REMOVE_FROM_WISHLIST: (state, action) =>{
            state.wishList = state.wishList.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} = cartSlice.actions
export default cartSlice.reducer