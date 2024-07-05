import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { Addwishlist, Removewishlist } from "../../features/wishlistCard/wishlistSlice";
import { AddInCart } from "../../features/AddToCart/AddToCartSlice";

const Card = ({ Product, isInWishlist , IsInCart }) => {
  const dispatch = useDispatch();

  const handleWish = () => {
    if (isInWishlist) {
      dispatch(Removewishlist({ id: Product.id }));
    } else {
      dispatch(Addwishlist(Product));
    }
  };

  function handleCart() {
    if (IsInCart) {
      dispatch(RemoveFromCart({ id: Product.id }));
    } else {
      dispatch(AddInCart(Product));
    }
  }

  return (
    <div className="border" id="main">
      <div className="images">
        <img
          src={Product.ProductImg}
          alt="Product img"
        />
      </div>
      <div className="details">
        <div className="price pt-2 text-xl">₹{Product.ProductPrice}</div>
        <div className="title pt-2 hover:text-slate-400 ">
          <a href="#">{Product.ProductName}</a>
        </div>
        <div className="AddToCart flex gap-10">
          <div className="Cart pt-2">
            <button className="bg-red-400 hover:bg-red-600 w-28 h-8 rounded-md" onClick={handleCart}>
              {IsInCart ? 'Added in Cart' : 'Add to Cart'}
            </button>
          </div>
          <div className="wishlist pt-4 text-xl" onClick={handleWish}>
            <i className={isInWishlist ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
