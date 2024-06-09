import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    Addwishlist: (state, action) => {
      state.items.push(action.payload);
    },
    Removewishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { Addwishlist, Removewishlist } = wishlistSlice.actions;

// Export the reducer
export default wishlistSlice.reducer;
