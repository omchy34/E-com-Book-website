import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import './Review.css'

const Review = () => {
  return (
    <>
      <section className="slider border w-80 m-10 h-80 hover:border-black">
        <div className="all p-5">
          <div className="swiper-slide box">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="clint img"
              className="rounded-full w-24 h-24 m-auto object-cover"
            />
            <h1 className="text-2xl p-2 text-center">Jhon deo</h1>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          <div className="stars flex justify-center text-red-500 text-3xl p-3">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoIosStarHalf />
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
