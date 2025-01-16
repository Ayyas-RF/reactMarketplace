import { createSlice } from "@reduxjs/toolkit";
import product1 from "../assets/gp6a.jpeg";
import product2 from "../assets/gp7.jpeg";
import product3 from "../assets/gp9.jpeg";

export const productSlice = createSlice({
  name: "product",
  initialState: [
    {
      id: 1,
      product_name: "Google Pixel 6a",
      description:
        "Experience smooth performance and all-day battery life with the Pixel 6a.",
      qty: 50,
      price: 4500000,
      product_type: "Smartphone",
      product_image: product1
    },
    {
      id: 2,
      product_name: "Google Pixel 7",
      description: "Smart. Simple. Stunning.",
      qty: 70,
      price: 6500000,
      product_type: "Smartphone",
      product_image: product2
    },
    {
      id: 3,
      product_name: "Google Pixel 9",
      description:
        "Google's flagship phone with a stunning display, powerful camera, and smooth performance.",
      qty: 100,
      price: 12000000,
      product_type: "Smartphone",
      product_image: product3
    }
  ],
  reducers: {
    addProduct: (state, payload) => {
      const findProduct = state.find(p => p.id === payload.payload.id);
      if (findProduct.qty === 1) {
        alert("Out of stock!");
        return;
      }
      state?.map(s => {
        if (s.id === findProduct.id) {
          s.qty -= 1;
        }
      });
    }
  }
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
