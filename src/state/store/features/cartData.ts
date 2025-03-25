import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  title: string;
  price: number;
  images: string[];
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  totalCount: number;
}

const initialState: CartState = {
  cartItems: [],
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ title: string; price: number; images: string[] }>
    ) => {
      const existingItem = state.cartItems.find(
        (item) => item.title === action.payload.title
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.totalCount += 1;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.title === action.payload
      );

      if (itemIndex !== -1) {
        state.totalCount -= state.cartItems[itemIndex].quantity;
        state.cartItems.splice(itemIndex, 1);
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
