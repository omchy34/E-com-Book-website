import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from '../features/wishlistCard/wishlistSlice';
import AddToCartReducer  from '../features/AddToCart/AddToCartSlice';
import userReducer from "../features/user/UserSlice";
import AccRefTokenReducer from '../features/AccRefToken/AccRefTokenSlice';

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    addtocart : AddToCartReducer,
    user: userReducer,
    AccRefToken: AccRefTokenReducer,
  },
});

export default store;
