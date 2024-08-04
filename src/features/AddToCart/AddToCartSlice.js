import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cartItems");
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (err) {
    console.error("Could not load cart items from localStorage", err);
    return [];
  }
};

const saveCartToLocalStorage = (cartItems) => {
  try {
    const serializedCart = JSON.stringify(cartItems);
    localStorage.setItem("cartItems", serializedCart);
  } catch (err) {
    console.error("Could not save cart items to localStorage", err);
  }
};

const initialState = {
  items: loadCartFromLocalStorage(),
};

const addToCartSlice = createSlice({
  name: "addtocart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(item => item._id === action.payload._id);
      if (existingItemIndex === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
        saveCartToLocalStorage(state.items);

        // API call
        axios.post("http://localhost:8000/api/v1/users/AddToCart", {
          productId: action.payload._id,
          quantity: 1
        }, {
          headers: {
            Authorization: `Bearer ${action.payload.accessToken}`,
          }
        }).then(response => {
          console.log("Item added to cart in the backend", response.data);
        }).catch(error => {
          console.error("Failed to add item to cart in the backend", error);
        });
      }
    },
    RemoveFromCart: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload._id);
      saveCartToLocalStorage(state.items);

      // API call
      axios.post("http://localhost:8000/api/v1/users/RemoveFromCart", {
        productId: action.payload._id
      }, {
        headers: {
          Authorization: `Bearer ${action.payload.accessToken}`,
        }
      }).then(response => {
        console.log("Item removed from cart in the backend", response.data);
      }).catch(error => {
        console.error("Failed to remove item from cart in the backend", error);
      });
    },
    ClearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
    SetCart: (state, action) => {
      state.items = action.payload;
      saveCartToLocalStorage(state.items);
    }
  },
});

export const { AddToCart, RemoveFromCart, ClearCart, SetCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
