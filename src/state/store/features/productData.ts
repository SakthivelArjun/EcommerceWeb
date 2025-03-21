import { createSlice } from "@reduxjs/toolkit";

export const productDataSlice = createSlice({
    name: 'productData',
    initialState: {
        productList:[],
        isLoading:false,
    },
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload
        },
    }
})

export const {
    setProductList,
   
} = productDataSlice.actions;

export default productDataSlice.reducer;