import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem("WishlistItem")) || [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    Addwishlist: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("WishlistItem", JSON.stringify(state.items));
    },
    Removewishlist: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload.product_id);
      localStorage.setItem('WishlistItem', JSON.stringify(state.items));
    },
    LoadwishList: (state, action) => {
      state.items = action.payload;
    }
  }
})

export const { Addwishlist, Removewishlist, LoadwishList } = wishlistSlice.actions;

// Export the reducer
export default wishlistSlice.reducer;
