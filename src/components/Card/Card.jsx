import React, { useState, useEffect } from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Addwishlist,
  Removewishlist,
} from "../../features/wishlistCard/wishlistSlice";
import { AddToCart, RemoveFromCart } from "../../features/AddToCart/AddToCartSlice";
import { Link } from "react-router-dom";

const Card = ({ product, isInWishlist }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.AccRefToken.AccRefToken.accessToken);
  const cartItems = useSelector((state) => state.addtocart.items);
  const [isInCart, setIsInCart] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  useEffect(() => {
    setIsInCart(cartItems.some((item) => item._id === product._id));
  }, [cartItems, product._id]);

  const handleWish = () => {
    if (isInWishlist) {
      dispatch(Removewishlist({ product_id: product._id, accessToken }));
    } else {
      dispatch(Addwishlist(product));
    }
  };

  const handleCart = () => {
    if (!accessToken) {
      setShowLoginPrompt(true); // Show login prompt if not authenticated
      return;
    }

    if (isInCart) {
      dispatch(RemoveFromCart({ product_id: product._id, accessToken }));
    } else {
      dispatch(AddToCart({ ...product, accessToken }));
    }
  };

  const closeLoginPrompt = () => {
    setShowLoginPrompt(false);
  };

  return (
    <div className="border" id="main">
      {showLoginPrompt && (
        <div className="login-prompt">
          <div className="login-prompt-content">
            <p>Please log in to add items to your cart.</p>
            <button onClick={closeLoginPrompt} className="close-btn">Close</button>
          </div>
        </div>
      )}
      <div className="images">
        <img src={product.images} alt="product img" />
      </div>
      <div className="details">
        <div className="price pt-2 text-xl">₹{product.Price}</div>
        <div className="title pt-2 hover:text-slate-400">
        <Link to={`/productPage/${product._id}`}>  {product.ProductName} </Link>
        </div>
        <div className="AddToCart flex gap-10">
          <div className="Cart pt-2">
            <button
              className="bg-red-400 hover:bg-red-600 w-28 h-8 rounded-md"
              onClick={handleCart}
            >
              {isInCart ? "Added in Cart" : "Add to Cart"}
            </button>
          </div>
          <div className="wishlist pt-4 text-xl" onClick={handleWish}>
            <i
              className={
                isInWishlist ? "fa-solid fa-heart" : "fa-regular fa-heart"
              }
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
