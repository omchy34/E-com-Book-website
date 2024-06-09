import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from '../features/wishlistCard/wishlistSlice';
import AddToCartReducer  from '../features/AddToCart/AddToCartSlice';

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    addtocart : AddToCartReducer
  },
});

export default store;
