import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [formData, setformData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    avatar: null,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('userName', formData.userName);
    data.append('email', formData.email);
    data.append('password', formData.password);
    if (formData.avatar) {
      data.append('avatar', formData.avatar);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/Register', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data.message);
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error registering the user!', error);
    }
  };
  

  function handleChange(e) {
    const {name, value } = e.target;
   setformData({ ...formData, [name] : value }); 
  }

  function handleFileChange(e) {
    setformData({ ...formData, avatar: e.target.files[0] });
  }

  return (
    <div className="min-h-96 flex items-center justify-center bg-pink-100 p-4 sm:p-6 md:p-8 font-poppins">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-pink-600 text-sm font-medium mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              id="fullName"
              name="fullName"
              onChange={handleChange}
              value={formData.fullName}
              type="text"
              placeholder="Enter your FullName"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-pink-600 text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              id="username"
              name="userName"
              onChange={handleChange}
              value={formData.userName}
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-pink-600 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              id="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-pink-600 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Select Your Profile pic
            </label>
            <input
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              id="avatar"
              type="file"
              name="avatar"
              onChange={handleFileChange}
              
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-pink-600 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
