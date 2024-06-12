import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        add(state, action) {
            state.cartItems.push(action.payload)
            state.total += action.payload.price
        },
        remove(state, action) {
            const itemRemove = state.cartItems.find(item => item.id === action.payload.id)
            if (itemRemove) {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
                state.total -= itemRemove.price
            }
        }
    }
})

export default cartSlice.reducer;
export const { add, remove } = cartSlice.actions;