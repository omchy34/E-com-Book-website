import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const OrderTracking = () => {
  const accessToken = useSelector(
    (state) => state.AccRefToken.AccRefToken.accessToken
  );
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post(
          "https://backend-1-te09.onrender.com/api/v1/order/SuccessOrder",
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response);
        setOrders(response.data.data.order);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [accessToken]);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">{error.message}</div>;

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            My orders
          </h2>

          <div className="mt-6 flow-root sm:mt-8">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {orders.map((order) => (
                <div key={order._id} className="py-6">
                  <div className="mt-6 space-y-4 pb-5">
                    {order.items.map((item) => (
                      <div
                        key={item._id}
                        className="flex items-center space-x-4 gap-5"
                      >
                        <img
                          src={item.ProductImg}
                          alt={item.ProductName}
                          className="w-24 h-24 object-cover"
                        />
                        <div className="text-base font-semibold text-gray-900 dark:text-white">
                          {item.ProductName}
                        </div>
                        <div className="text-base font-semibold text-gray-900 dark:text-white">
                          Quantity: {item.quantity}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-y-4">
                    <dl className="w-full sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                        Order Id :
                      </dt>
                      <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                        {order._id}
                      </dd>
                    </dl>
                    <dl className="w-full sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                        Date:
                      </dt>
                      <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                        {new Date(
                          order.items[0].createdAt
                        ).toLocaleDateString()}
                      </dd>
                    </dl>

                    <dl className="w-full sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                        Status:
                      </dt>
                      <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                        {order.paymentStatus}
                      </dd>
                    </dl>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                      <Link className="bg-red-500 p-2 rounded-md">
                        Track Order
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;
