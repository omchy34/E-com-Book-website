import React from 'react'
import {Link} from "react-router-dom"
const orderConfirmation = () => {

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="bg-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-2xl max-w-lg sm:max-w-2xl md:max-w-3xl w-full">
      <div className="text-center mb-8 sm:mb-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Order Confirmed!</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
          Your order has been successfully placed. We are preparing your items and will send you a confirmation once they are on their way.
        </p>
      </div>
      <div className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Order Details</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-gray-300 pb-4">
            <span className="text-gray-700 font-medium">Order ID:</span>
            <span className="text-gray-600 font-light">123456</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-4">
            <span className="text-gray-700 font-medium">Order Date:</span>
            <span className="text-gray-600 font-light">July 23, 2024</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Total Amount:</span>
            <span className="text-green-600 font-light text-lg md:text-xl">$150.00</span>
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-10 text-center">
        <button
          className="bg-blue-600 text-white font-semibold py-3 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <Link to="/OrderTracking">
          Track Your Order
          </Link>
        </button>
      </div>
    </div>
  </div>
  )
}

export default orderConfirmation