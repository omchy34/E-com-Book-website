import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromCart } from "../../features/AddToCart/AddToCartSlice";
import Card from "../Card/Card";
import "./AddTocart.css";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const AddtoCartItems = useSelector((state) => state.addtocart.items);
  const dispatch = useDispatch();

  // function handleRemove(id) {
  //   dispatch(RemoveFromCart({ id }));
  // }

  return (
    <section className="Main" id="colorChange">
      <div className="backdrop-blur-2xl bg-white/30">
        <main className="container mx-auto my-auto h-screen">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="col-span-2 p-5">
              <div className="cart flex justify-between">
                <h2 className="text-xl font-bold text-red-700">Shoping Cart</h2>
                <h3 className="text-xl font-bold">1 Items</h3>
              </div>
              <hr className="border-black-300 text-center text-2xl mt-8" />
              <div>
                <div className="flex justify-between items-center mt-6 pt-6">
                  <div className="flex items-center">
                    <img
                      src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2020-12/csm-220-web-1.jpg"
                      width="100"
                      className="rounded-full"
                    />
                    <div className="flex flex-col ml-3">
                      <span className="md:text-xl font-medium">Product -1</span>
                      <span className="text-xs font-light text-gray-400">
                        #41551
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="pr-8 flex">
                      <span className="font-semibold text-3xl">-</span>
                      <input
                        type="text"
                        className="focus:outline-none bg-gray-100 border h-9 w-9 rounded text-sm px-2 mx-2"
                        value="1"
                      />
                      <span className="font-semibold text-3xl">+</span>
                    </div>
                    <div className="pr-8">
                      <span className="text-xl font-medium">$10.50</span>
                    </div>
                    <div className="text-2xl">
                      <MdDeleteForever />
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-between items-center pt-6 mt-6 border-t">
                  <div className="flex items-center">
                    <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/cfv-220-7-1-66.jpg" width="60" className="rounded-full" />
                    <div className="flex flex-col ml-3">
                      <span className="text-md font-medium w-auto">Product -2</span>
                      <span className="text-xs font-light text-gray-400">#66999</span>
                      <span className="text-sm font-light text-orange-400">Categories-2</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="pr-8 flex">
                      <span className="font-semibold">-</span>
                      <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1" />
                      <span className="font-semibold">+</span>
                    </div>
                    <div className="pr-8">
                      <span className="text-xs font-medium">$10.50</span>
                    </div>
                    <div><MdDeleteForever /></div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-6 border-t">
                  <div className="flex items-center">
                    <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2021-03/cfc-204.jpg" width="60" className="rounded-full" />
                    <div className="flex flex-col ml-3">
                      <span className="text-md font-medium">Product -3</span>
                      <span className="text-xs font-light text-gray-400">#86577</span>
                      <span className="text-sm font-light text-orange-400">Categories-3</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="pr-8 flex">
                      <span className="font-semibold">-</span>
                      <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1" />
                      <span className="font-semibold">+</span>
                    </div>
                    <div className="pr-8">
                      <span className="text-xs font-medium">$10.50</span>
                    </div>
                    <div><MdDeleteForever /></div>
                  </div>
                </div> */}

                <div className="flex justify-between items-center mt-6 pt-6 border-t">
                  <div className="flex items-center">
                    <i className="fa fa-arrow-left text-sm pr-2 text-red-800"></i>
                    <span className="text-md font-medium text-red-800">
                      Continue Shopping
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span className="text-xl font-medium text-gray-400 mr-1">
                      Subtotal:
                    </span>
                    <span className="text-lg font-bold text-gray-800">
                      {" "}
                      $24.90
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-5 col-span-2 sm:col-span-1">
              <div className="checkout">
                <h2 className="text-xl font-bold">Order Summary</h2>
                <hr className="border-black-300 text-center text-2xl mt-8" />
                <div className="flex justify-between mt-5 uppercase font-semibold">
                  <span>Items 1</span>
                  <span>$24.90</span>
                </div>
                <div className="mt-5">
                  <span className="text-md font-medium uppercase">
                    Shipping
                  </span>
                  <div className="mt-2">
                    <div className="dropdown inline-block relative w-full">
                      <select className="bg-gray-300 text-gray-700 p-2 w-full inline-flex items-center justify-between rounded">
                        <span className="mr-1">Select delivery</span>
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                        <option value="selected">Cash On Delivery</option>
                        <option value="1">Pre-payment</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="my-5 items-star">
                  <span className="uppercase text-md font-medium">
                    Promo code
                  </span>
                  <input
                    type="text"
                    className="p-2 w-full mt-2 bg-gray-300 rounded"
                    placeholder="Enter your code"
                  />
                  <button className="py-2 px-6 bg-red-500 hover:bg-red-700 text-white rounded mt-3">
                    Apply
                  </button>
                </div>
                <hr className="border-black-300 text-center text-2xl mt-8" />
                <div className="flex justify-between mt-3 font-semibold">
                  <span className="uppercase">Total cost</span>
                  <span>$24.90</span>
                </div>
                <button className="uppercase font-medium py-2 w-full bg-red-600 text-white rounded mt-8" >
                  <Link to='/Checkout'>
                  checkout
                  </Link>
                </button> 
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default AddToCart;
//       {AddtoCartItems.map((item) => (
//         <Card key={item.id} book={item} handleRemove={handleRemove} IsInCart={true} />
//       ))}
