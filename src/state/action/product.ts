import { setProductList } from "../store/features/productData";
import axios from "axios";

export const getProductList=() => async (dispatch: any) => {
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

  

