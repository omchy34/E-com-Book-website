import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Removewishlist } from "../../features/wishlistCard/wishlistSlice";
import Card from "../Card/Card";
import './WishList.css'

const WishList = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(Removewishlist({ id }));
  }

  return (
    <section className="Main">
      <h1 className="text-center text-red-500 text-2xl pt-5">Wish List</h1>
      <div className="flex flex-wrap gap-5 p-10 justify-center items-center">
        {wishlistItems.map((item) => (
          <Card key={item.id} book={item} handleRemove={handleRemove} isInWishlist={true} />
       
        ))}
      </div>
    </section>
  );
};

export default WishList;
