import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddToCartSlice, {
  RemoveFromCart,
  ClearCart,
} from "../../features/AddToCart/AddToCartSlice";
import { MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import _ from "lodash";
import { useAddress } from "../../contex/AddressContex.jsx";

const AddToCart = () => {
  const { address } = useAddress();
  const accessToken = useSelector(
    (state) => state.AccRefToken.AccRefToken.accessToken
  );
  const AddtoCartItems = useSelector((state) => state.addtocart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    AddtoCartItems.forEach((item) => {
      initialQuantities[item._id] = 1;
    });
    setItemQuantities(initialQuantities);
  }, [AddtoCartItems]);
  
  const updateCartQuantitiesInBackend = useCallback(
    _.debounce(async (id, quantity) => {
      if (accessToken) {
        try {
          await axios.post(
            "http://localhost:8000/api/v1/users/AddToCart",
            { quantity, productId: id },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
    }, 500),
    [accessToken]
  );

  const handleIncrease = (id) => {
    setItemQuantities((prevQuantities) => {
      const updatedQuantities = {
        ...prevQuantities,
        [id]: (prevQuantities[id] || 1) + 1,
      };
      updateCartQuantitiesInBackend(id, updatedQuantities[id]);
      return updatedQuantities;
    });
  };

  const handleDecrease = (id) => {
    setItemQuantities((prevQuantities) => {
      const updatedQuantities = {
        ...prevQuantities,
        [id]: Math.max((prevQuantities[id] || 1) - 1, 1),
      };
      updateCartQuantitiesInBackend(id, updatedQuantities[id]);
      return updatedQuantities;
    });
  };

  const handleDeleteItem = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/RemoveFromCart",
        { productId: id },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.data.statusCode === 200) {
        toast.success(response.data.message);
      }
      dispatch(RemoveFromCart({ _id: id }));
      setItemQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[id];
        return updatedQuantities;
      });
    } catch (error) {
      console.log("Something went wrong while removing the item", error);
    }
  };

  const handlePromoChange = (e) => setPromo(e.target.value);

  const handleDiscount = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/Admin/promoCodes"
      );
      const promoCode = response.data.data.find((code) => code.code === promo);
      if (promoCode) {
        setDiscount(promoCode.discount);
        toast.success("Promo code applied");
      } else {
        toast.error("Please enter a valid promo code");
      }
    } catch (error) {
      console.error("Error fetching promo codes:", error);
    }
  };
  const calculateTotal = () => {
    let total = 0;
    AddtoCartItems.forEach((item) => {
      const quantity = itemQuantities[item._id] || 1;
      total += item.Price * quantity;
    });
    return total - (total * discount) / 100;
  };

  const handlePlaceOrder = async () => {
    if (!address) {
      toast.error("Please enter your address");
      return;
    }

    try {
      const items = AddtoCartItems.map((item) => ({
        productId: item._id,
        quantity: itemQuantities[item._id] || 1,
        ProductName: item.ProductName,
        ProductImg: item.images,  
        address
      }));
      const Response = await axios.post(
        "http://localhost:8000/api/v1/order/placeOrder",
        {
          items,
          amount: calculateTotal(),
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        } 
      );
      console.log(Response);
      if (Response.data.statusCode === 200) {
        toast.success("Order placed successfully");
        console.log(Response);
        const { razorpayOrderId, amount , newOrder} = Response.data.data;
        

        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: amount * 100, // Amount in paise
          currency: "INR",
          name: "Your Company Name",
          description: "Test Transaction",
          order_id: razorpayOrderId,
          handler: async function (response) {
            await axios.post(
              "http://localhost:8000/api/v1/order/verify-payment",
              {
                Payment_Id: response.razorpay_payment_id,
                Order_Id: response.razorpay_order_id,
                Signature: response.razorpay_signature,
                newOrder
              },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
            console.log(  "OKIe" ,response.razorpay_signature);
            dispatch(ClearCart());
            navigate("/OrderConfirmation");
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        toast.error(Response.data.message);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Something went wrong while placing the order");
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Shopping Cart
              </h2>
              <hr />
              {AddtoCartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between border-b border-gray-200 py-4 hover:bg-gray-50 transition duration-300 ease-in-out"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.images}
                      alt={item.ProductName}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.ProductName}
                      </h3>
                      <p className="text-sm text-gray-500">{item._id}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        className="text-lg text-gray-500 focus:outline-none"
                        onClick={() => handleDecrease(item._id)}
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">
                        {itemQuantities[item._id] || 1}
                      </span>
                      <button
                        className="text-lg text-gray-500 focus:outline-none"
                        onClick={() => handleIncrease(item._id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-700 transition duration-200"
                      onClick={() => handleDeleteItem(item._id)}
                    >
                      <MdDeleteForever size={24} />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center mt-4">
                <h3 className="text-xl font-semibold text-gray-800">Total:</h3>
                <p className="text-xl font-semibold text-gray-800">
                  ₹{calculateTotal().toFixed(2)}
                </p>
              </div>
              <form
                onSubmit={handleDiscount}
                className="mt-6 flex items-center"
              >
                <input
                  type="text"
                  value={promo}
                  onChange={handlePromoChange}
                  placeholder="Enter promo code"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
                <button
                  type="submit"
                  className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
                >
                  Apply
                </button>
              </form>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Checkout
              </h2>
              <hr />
              {address ? (
                <button
                  onClick={handlePlaceOrder}
                  className="block bg-red-600 text-white text-center rounded-lg py-2 mt-6 hover:bg-red-700 transition duration-200"
                >
                  Place Order
                </button>
              ) : (
                <Link
                  to="/AddressForm"
                  className="block bg-red-600 text-white text-center rounded-lg py-2 mt-6 hover:bg-red-700 transition duration-200"
                >
                  Add Address
                </Link>
              )}
              <Link
                to="/"
                className="block bg-gray-200 text-gray-800 text-center rounded-lg py-2 mt-4 hover:bg-gray-300 transition duration-200"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCart;
