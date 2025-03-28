import {
  addToCart,
  removeFromCart,
  updateCartQuantity,
} from "../store/features/cartData";
import { setProductList } from "../store/features/productData";
import axios from "axios";

export const getProductList = () => async (dispatch: any) => {
  try {
    const result = await axios.get("https://dummyjson.com/products");
    if (result && result.data) {
      dispatch(setProductList(result.data.products));
    } else {
      console.log("Error: No data found in API response");
    }
  } catch (error) {
    console.error("Failed to fetch products", error);
  }
};


// Add to cart
export const addProductToCart = (product: any) => (dispatch: any) => {
  dispatch(addToCart(product));
};
// Remove from cart
export const removeProductFromCart = (id: number) => (dispatch: any) => {
  dispatch(removeFromCart(id));
};

// Update cart quantity
export const changeCartQuantity =
  (id: number, quantity: number) => (dispatch: any) => {
    dispatch(updateCartQuantity({ id, quantity }));
  };
