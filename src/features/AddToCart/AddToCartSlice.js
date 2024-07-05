import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      ProductId : "",
      ProductName: "",
      ProductPrice : 0,
      ProductImg : '',
    },
  ],
};

export const AddToCartSlice = createSlice({
  name: "addtocart",
  initialState,
  reducers: {
    AddInCart: (state, action) => {
      state.items.push(action.payload);
    },
    RemoveFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { AddInCart, RemoveFromCart } = AddToCartSlice.actions;

// Export the reducer
export default AddToCartSlice.reducer;
