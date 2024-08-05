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
import AddToCart from './components/Cart/AddToCart.jsx'
import Arrivals from './components/Arrivals/Arrivals.jsx'
import Contact from './components/Contact/Contact.jsx'
import Registration from './components/LoginRej/Registration.jsx'
import Login from './components/LoginRej/Login.jsx'
import Profile from './components/Profile/Profile.jsx'
import Logout from './components/Logout/Logout.jsx';
import ErrorPage from './components/404Page/404Page.jsx';
import ProductPage from './components/ProductPage/ProductPage.jsx';
import AddressForm from './components/Cart/AddressForm.jsx';
import OrderConfirmation from './components/orderconfirmation/OrderConfirmation.jsx';
import { AddressProvider } from './contex/AddressContex.jsx';
import OrderTracking from './components/OrderTrack/OrderTrack.jsx';
import WishList from './components/WishList/WishList.jsx';

  
// import Logout from './components/Logout/Logout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <Router>
        <AddressProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/Arrivals" element={<Arrivals />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/AddToCart" element={<AddToCart />} />
              <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
              <Route path="/OrderTracking" element={<OrderTracking />} />
              <Route path="/AddressForm" element={<AddressForm />} />
              <Route path='/WishList' element={<WishList/>} />
              <Route path="/Registration" element={<Registration />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Logout" element={<Logout />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/ProductPage" element={<ProductPage />} />
            </Route>
          </Routes>
        </AddressProvider>
      </Router>
    </Provider>
    <ToastContainer />
  </React.StrictMode>
)
