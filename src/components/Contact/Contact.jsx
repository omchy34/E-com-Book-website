import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Contact = () => {
  const accessToken = useSelector((state) => state.AccRefToken.AccRefToken.accessToken);
  const [data, setData] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: "",
  });

  function handleData(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  useEffect(() => {
    if (accessToken) {
      const fetchData = async () => {
        try {
          const response = await axios.post("http://localhost:8000/api/v1/users/userData", {}, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          if (data) {
            setUserData({
              name: response.data.data.user.fullName,
              email: response.data.data.user.email,
              message: "",
            });
            setData(false);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          alert("Token not found");
        }
      };
      fetchData();
    }
  }, [accessToken, data]);

  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg fade-in">
          <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">Contact Us</h2>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" value={userData.name} required onChange={handleData} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" value={userData.email} required onChange={handleData} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" value={userData.message} rows="4" required onChange={handleData} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
