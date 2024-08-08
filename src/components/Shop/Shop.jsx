import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../features/AccRefToken/AccRefTokenSlice.js'; // update this path
import { SetCart } from "../../features/AddToCart/AddToCartSlice.js";
import { LoadwishList } from "../../features/wishlistCard/wishlistSlice.js";

const Shop = () => {
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
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
    } finally {
      setLoading(false); // Set loading to false when data is fetched or an error occurs
    }
  }

  useEffect(() => {
      await BookData();
    async function loadData() {

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
          xmlSpace="preserve"
          className="w-16 h-16 animate-spin"
        >
          <path
            fill="none"
            stroke="#3498db"
            strokeWidth="4"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M50,15a35,35 0 1,0 35,35a35,35 0 1,0 -35,-35"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    );
  }

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
                return <Card key={product._id} product={product} isInWishlist={isInWishlist} />;
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Shop;
