import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react";
import StatusCode from "../utils/StatusCode";

const initailState = {
    data: [],
    status: StatusCode.IDEL,
}

const productSlice = createSlice({
    name: "products",
    initialState: initailState,
    // reducers: {
    //    fetchProducts(state, action) {
    //     state.data = action.payload
    //    }
    // },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = StatusCode.LOADING
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = StatusCode.SUCCESS
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = StatusCode.FAILED
            })
    }
})

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;


export const getProducts = createAsyncThunk('products/get', async () => {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = await response.json()
    return data
})


// export function getProducts() {
//     return async (dispatch) => {
//         const response = await fetch(`https://fakestoreapi.com/products`)
//         const data = await response.json()
//         dispatch(fetchProducts(data))
//     }
// }