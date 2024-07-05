import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import App from './App.jsx'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
// redux
import store from './app/store.js'
import { Provider } from 'react-redux'
// router
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Shop from './components/Shop/Shop.jsx'
import WishList from './components/Wishlist/WishList.jsx'
import AddToCart from './components/Cart/AddToCart.jsx'
import Arrivals from './components/Arrivals/Arrivals.jsx'
import Contact from './components/Contact/Contact.jsx'
import Registration from './components/LoginRej/Registration.jsx'
import Login from './components/LoginRej/Login.jsx'
import Profile from './components/Profile/Profile.jsx'
import Logout from './components/Logout/Logout.jsx';
import Checkout from './components/CheckOut/Checkout.jsx';
import ErrorPage from './components/404Page/404Page.jsx';

// import Logout from './components/Logout/Logout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/Arrivals" element={<Arrivals />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/AddToCart" element={<AddToCart />} />
            <Route path="/WishList" element={<WishList />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
    <ToastContainer />
  </React.StrictMode>
)
