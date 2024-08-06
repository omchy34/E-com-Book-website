import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoadwishList } from "../../features/wishlistCard/wishlistSlice.js";
import Card from "../Card/Card";
import './WishList.css';

const WishList = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  useEffect(() => {
    // Only run this code when the component mounts
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const refreshToken = localStorage.getItem("refreshToken");
      dispatch(setToken({ accessToken, refreshToken }));

      const storedWishlist = JSON.parse(localStorage.getItem('WishlistItem'));
      if (storedWishlist) {
        dispatch(LoadwishList(storedWishlist));
      }
    }
  }, [dispatch]);

  return (
    <section className="Main">
      <h1 className="text-center text-red-500 text-2xl pt-5">Wish List</h1>
      <div className="flex flex-wrap gap-5 p-10 justify-center items-center">
        {wishlistItems.map((item) => (
          <Card key={item._id} product={item} isInWishlist={true} />
        ))}
      </div>
    </section>
  );
};

export default WishList;
