import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../features/AccRefToken/AccRefTokenSlice.js'; // update this path
import { SetCart } from "../../features/AddToCart/AddToCartSlice.js";
import { LoadwishList } from "../../features/wishlistCard/wishlistSlice.js";
// import "./shop.css"; // Ensure the CSS file is included

const Shop = () => {
  const [Product, setProduct] = useState([]);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const AddtoCartItems = useSelector((state) => state.addtocart.items);
  const dispatch = useDispatch();

  async function BookData() {
    try {
      const response = await axios.post(
        "https://backend-1-te09.onrender.com/api/v1/users/Admin/ProductList"
      );
      if (response) {
        setProduct(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Cannot fetch data");
      }
    } catch (error) {
      toast.error("Internal fetching error");
      console.log("500", error);
    }
  }

  useEffect(() => {
    async function loadData() {
      await BookData();

      if (localStorage.getItem("accessToken")) {
        const accessToken = localStorage.getItem("accessToken");
        dispatch(setToken({ accessToken, refreshToken: localStorage.getItem("refreshToken") }));
        const storedCart = JSON.parse(localStorage.getItem('cartItems'));
        const storedWishlist = JSON.parse(localStorage.getItem('WishlistItem'));
        if (storedWishlist) {
          dispatch(LoadwishList(storedWishlist));
        }
        if (storedCart) {
          dispatch(SetCart(storedCart));
        }
      }
    }

    loadData();
  }, [dispatch]);

  return (
    <>
      <section className="Main">
        <h1 className="text-center text-red-500 text-2xl pt-5">Shop</h1>
        <div className="full">
          <section>
            <div className="flex flex-wrap justify-center items-center">
              {Product.map((product) => {
                const isInWishlist = wishlistItems.some((item) => item._id === product._id);
                // const IsInCart = AddtoCartItems.some((item) => item._id === product._id);
                return <Card key={product._id} product={product} isInWishlist={isInWishlist}  />;
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Shop;
