import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productData";
import cartReducer from "../features/cartData";

export const store = configureStore({
  reducer: {
    productData: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
