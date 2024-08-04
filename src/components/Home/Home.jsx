import React, { useState } from "react";
import Card from "../Card/Card";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { IoReloadOutline } from "react-icons/io5";
import "./Home.css";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import Review from "../Review/Review";

const Home = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const AddtoCartItems = useSelector((state) => state.addtocart.items);

  return (
    <>
      <div className="main">
        <div className="home">
          <div className="texts p-40 max-h-screen max-w-screen">
            <p className="text-red-500 font-bold">collection book 2000</p>
            <p className="text-3xl pt-2">40% Discount On Books</p>
            <p className="text-3xl ">By New Kitab Ghar</p>
            <br />
            <button className="bg-red-400 h-12 w-36 hover:bg-red-600">
              <Link to="/shop">Shop Now</Link>
            </button>
          </div>
        </div>
        <div className="content flex justify-center ">
          <div className="box1 flex p-10 flex-col">
            <p className="icon pt-2 text-5xl">
              <FaShippingFast />
            </p>
            <p className="Itext text-xl"> Fast Delivery </p>
            <p className="IItext">Enjoy free shipping and our fast delivery service.</p>
          </div>
          <div className="box1 flex p-10 flex-col">
            <p className="icon pt-2 text-5xl">
              <FaLock />
            </p>
            <p className="Itext text-xl">Secure Payment</p>
            <p className="IItext">We provide 100% Secure payment with trusted partner</p>
          </div>
          <div className="box1 flex p-10 flex-col">
            <p className="icon pt-2 text-5xl">
              <IoReloadOutline />
            </p>
            <p className="Itext text-xl">Easy returns</p>
            <p className="IItext">We provide 10 day of replacement and 7 days of refund policy</p>
          </div>
          <div className="box1 flex p-10 flex-col">
            <p className="icon pt-2 text-5xl">
              <BiSupport />
            </p>
            <p className="Itext text-xl">24/7 Support</p>
            <p className="IItext">We provide 24 Hours of customer support</p>
          </div>
        </div>
        <div className="popularBooks pt-20">
          <p className="pop text-center text-3xl">Popular Books</p>
          <div className="cards gap-5 pt-20 flex flex-wrap">
            {/* {Product.map((Product) => {
              const isInWishlist = wishlistItems.some((item) => item._id === Product._id);
              const IsInCart = AddtoCartItems.some((item) => item._id === Product._id);
              return <Card key={Product._id} Product={Product} isInWishlist={isInWishlist} IsInCart={IsInCart} />;
            })} */}
          </div>
        </div>
        <div className="swiper p-10">
          <div className="clints">
            <h1 className="text-center text-3xl">Clints Review</h1>
          </div>
          <div className="slide pt-10">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
            >
              <SwiperSlide> <Review /></SwiperSlide>
              <SwiperSlide> <Review /></SwiperSlide>
              <SwiperSlide> <Review /></SwiperSlide>
              <SwiperSlide> <Review /></SwiperSlide>
              <SwiperSlide> <Review /></SwiperSlide>
              <SwiperSlide> <Review /></SwiperSlide>
              ...
            </Swiper>

          </div>
        </div>
        <div className="Subscribe">
          <div className="bgImg-text">
            <div className="SubscribeData">
              <p>Subscribe For Latest Update</p>
              <input type="email" id="Input" />
              <input
                type="submit"
                value="Subscribe"
                id="button"
                className="bg-pink-500 text-slate-50 h-8 m-5 w-24 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
