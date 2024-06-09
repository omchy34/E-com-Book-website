import React from 'react'
import ReactDOM from 'react-dom/client'
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
import AddToCart from './components/Checkout/AddToCart.jsx'
import Arrivals from './components/Arrivals/Arrivals.jsx'
import Contact from './components/Contact/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="Arrivals" element={<Arrivals />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="AddToCart" element={<AddToCart />} />
            <Route path="WishList" element={<WishList />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)
