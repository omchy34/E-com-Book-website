import React from 'react';

const ProductPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img className="w-full h-64 md:h-80 lg:h-96 object-cover object-center" src="https://via.placeholder.com/400" alt="Book Cover" />
        </div>

        {/* Product Details */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Book Title</h1>
          <p className="text-lg md:text-xl text-gray-600 mt-2">by Author Name</p>
          <div className="mt-4">
            <span className="text-xl md:text-2xl font-semibold text-gray-800">$19.99</span>
          </div>

          <p className="mt-4 md:mt-6 text-gray-600">This is a detailed description of the book. It covers key points, the plot, and why it's a great read. The description is meant to attract potential buyers by highlighting the book's unique features and benefits.</p>

          <div className="mt-6 md:mt-8">
            <button className="w-full px-4 py-2 bg-blue-500 text-white text-sm md:text-base font-semibold rounded-lg hover:bg-blue-600">Add to Cart</button>
            <button className="w-full mt-2 px-4 py-2 border border-blue-500 text-blue-500 text-sm md:text-base font-semibold rounded-lg hover:bg-blue-100">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6 mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Product Details</h2>
        <ul className="list-disc list-inside mt-2 md:mt-4 text-gray-600">
          <li>Publisher: XYZ Publications</li>
          <li>Language: English</li>
          <li>ISBN-10: 1234567890</li>
          <li>ISBN-13: 978-1234567890</li>
          <li>Dimensions: 8 x 5 x 1 inches</li>
        </ul>
      </div>

      {/* Reviews Section */}
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6 mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Customer Reviews</h2>
        <div className="mt-2 md:mt-4">
          <div className="border-b pb-4">
            <p className="text-sm md:text-base text-gray-600">Review by <span className="font-semibold">John Doe</span></p>
            <p className="text-sm md:text-base text-gray-600">This book was amazing. I loved the plot and the characters were very well developed. Highly recommend!</p>
          </div>
          <div className="border-b pb-4 mt-4">
            <p className="text-sm md:text-base text-gray-600">Review by <span className="font-semibold">Jane Smith</span></p>
            <p className="text-sm md:text-base text-gray-600">An interesting read with a lot of twists and turns. Kept me hooked till the end.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
