import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setToken } from '../../features/AccRefToken/AccRefTokenSlice.js'; // update this path
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true); // Start loading animation

    try {
      const response = await axios.post('https://backend-1-te09.onrender.com/api/v1/users/Login', formData, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      });

      console.log('API Response:', response);


      if (response.data.success === true) {
        const accessToken = response.data.data?.accessToken;

        if (accessToken) {
          dispatch(setToken({ accessToken }));
          console.log('Access Token:', accessToken);
          toast.success("Login Success");
          navigate("/");
        } else {
          console.error('Access Token not found in the response:', response.data);
          toast.error("Login failed. Please try again.");
        }
      } else {
        console.log(response.data.message);
        toast.error("Invalid User Credentials");
      }



    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Invalid User Credentials");
      } else if (error.response && error.response.status === 404) {
        toast.error("User not registered");
      } else {
        toast.error("An unexpected error occurred");
      }
      console.log(error);
    } finally {
      setLoading(false); // Stop loading animation
    }


    function handleChange(e) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }

    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-pink-300 to-blue-400 p-4">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-extrabold text-center text-pink-700">
            Sign in to your account
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address or UserName
                </label>
                <input
                  id="email-address"
                  name="identifier"
                  type="text"
                  value={formData.identifier}
                  onChange={handleChange}
                  required
                  className="relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm transition-colors duration-200 ease-in-out"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={formData.password}
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm transition-colors duration-200 ease-in-out"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-pink-600 hover:text-pink-500 transition-colors duration-200 ease-in-out"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-transform transform hover:scale-105"
              >
                {loading ? (
                  <svg
                    className="w-5 h-5 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6h-2zm12 0a6 6 0 00-6-6V4a8 8 0 018 8h-2z"
                    ></path>
                  </svg>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>
          <div className="text-center text-sm text-gray-600">
            <p>
              Don't have an account?{" "}
              <a
                href="#"
                className="font-medium text-pink-600 hover:text-pink-500 transition-colors duration-200 ease-in-out"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default Login
