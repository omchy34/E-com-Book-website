import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    avatar: null,
  });
  const [fileError, setFileError] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setFormError("");

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("userName", formData.userName);
    data.append("email", formData.email);
    data.append("password", formData.password);
    if (formData.avatar) {
      data.append("avatar", formData.avatar);
    }

    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/Register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("User registered successfully.");
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("User with email or username already exists.");
      } else if (error.response) {
        alert(error.response.data.message);
      } else {
        console.error("There was an error registering the user!", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        setFileError("Invalid file type. Only image files are allowed.");
        setFormData({ ...formData, avatar: null });
      } else {
        setFileError("");
        setFormData({ ...formData, avatar: file });
      }
    }
  }

  return (
    <div className="min-h-96 flex items-center justify-center bg-gradient-to-r from-pink-300 via-pink-300 to-blue-400 p-4 sm:p-6 md:p-8 font-poppins">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          {formError && <p className="text-red-500 text-sm mb-4">{formError}</p>}
          <div className="mb-6">
            <label className="block text-pink-600 text-sm font-medium mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              id="fullName"
              name="fullName"
              onChange={handleChange}
              value={formData.fullName}
              type="text"
              placeholder="Enter your Full Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-pink-600 text-sm font-medium mb-2" htmlFor="userName">
              Username
            </label>
            <input
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              id="userName"
              name="userName"
              onChange={handleChange}
              value={formData.userName}
              type="text"
              placeholder="Enter your Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-pink-600 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              id="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              name="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-pink-600 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-pink-600 text-sm font-medium mb-2" htmlFor="avatar">
              Select Your Profile Pic
            </label>
            <input
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              id="avatar"
              type="file"
              name="avatar"
              onChange={handleFileChange}
            />
            {fileError && <p className="text-red-500 text-sm mt-2">{fileError}</p>}
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
