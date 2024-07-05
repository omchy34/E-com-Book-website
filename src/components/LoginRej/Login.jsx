import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(){
    e.preventDefault();
  }

  function handleChange(e){
    const {name , vlaue} = e.target;
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-pink-300 to-blue-400 p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-pink-700">
          Sign in to your account
        </h2>
        <form className="mt-8 space-y-6" onClick={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address or UserName
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
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
              Sign in
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

export default Login;
