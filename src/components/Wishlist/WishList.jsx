import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoadwishList, Removewishlist } from "../../features/wishlistCard/wishlistSlice.js";
import Card from "../Card/Card";
import './WishList.css'

const WishList = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  function handleRemove(productId) {
    // dispatch(Removewishlist({ product_id: productId }));
    // console.log(productId);
    
    if(localStorage.getItem("accessToken")) {
      const accessToken = localStorage.getItem("accessToken");
      dispatch(setToken({ accessToken, refreshToken: localStorage.getItem("refreshToken") }));
      const storedWishlist = JSON.parse(localStorage.getItem('WishlistItem'));
      if(storedWishlist){
        dispatch(LoadwishList(storedWishlist));
      }
    }
  }

  return (
    <section className="Main">
      <h1 className="text-center text-red-500 text-2xl pt-5">Wish List</h1>
      <div className="flex flex-wrap gap-5 p-10 justify-center items-center">
        {wishlistItems.map((item) => (
          <Card key={item._id} product={item} isInWishlist={true}  />
        ))}
      </div>
    </section>
  );
};

export default WishList;
