import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { Addwishlist, Removewishlist } from "../../features/wishlistCard/wishlistSlice";
import { AddInCart } from "../../features/AddToCart/AddToCartSlice";

const Card = ({ book, isInWishlist , IsInCart }) => {
  const dispatch = useDispatch();

  const handleWish = () => {
    if (isInWishlist) {
      dispatch(Removewishlist({ id: book.id }));
    } else {
      dispatch(Addwishlist(book));
    }
  };

  function handleCart() {
    if (IsInCart) {
      dispatch(RemoveFromCart({ id: book.id }));
    } else {
      dispatch(AddInCart(book));
    }
  }

  return (
    <div className="border" id="main">
      <div className="images">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/book/w/b/2/pw-calculus-core-fear-no-more-calculus-book-by-sachin-jakhar-for-original-imagymm9sduc9kgp.jpeg?q=70"
          alt="Product img"
        />
      </div>
      <div className="details">
        <div className="price pt-2 text-xl">₹54</div>
        <div className="title pt-2 hover:text-slate-400 ">
          <a href="#">{book.title}</a>
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
