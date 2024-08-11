import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'cartCounter',
    initialState:{
        count:0,
        products:[]
    },
    reducers:{
        addToCart:(state,action) => {
            state.count += 1
            state.products.push(action.payload)
        },
        removeFromCart:(state) => {
            state.count -= 1
        }
    },
})

export const { addToCart,removeFromCart } = CartSlice.actions

export default CartSlice.reducer
