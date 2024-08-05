import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import './index.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import store from './app/store.js';
import { Provider } from 'react-redux';
import { AddressProvider } from './contex/AddressContex.jsx';

// Lazy loading components
const Layout = React.lazy(() => import('./Layout.jsx'));
const Home = React.lazy(() => import('./components/Home/Home.jsx'));
const Shop = React.lazy(() => import('./components/Shop/Shop.jsx'));
const AddToCart = React.lazy(() => import('./components/Cart/AddToCart.jsx'));
const Arrivals = React.lazy(() => import('./components/Arrivals/Arrivals.jsx'));
const Contact = React.lazy(() => import('./components/Contact/Contact.jsx'));
const Registration = React.lazy(() => import('./components/LoginRej/Registration.jsx'));
const Login = React.lazy(() => import('./components/LoginRej/Login.jsx'));
const Profile = React.lazy(() => import('./components/Profile/Profile.jsx'));
const Logout = React.lazy(() => import('./components/Logout/Logout.jsx'));
const ErrorPage = React.lazy(() => import('./components/404Page/404Page.jsx'));
const ProductPage = React.lazy(() => import('./components/ProductPage/ProductPage.jsx'));
const AddressForm = React.lazy(() => import('./components/Cart/AddressForm.jsx'));
const OrderConfirmation = React.lazy(() => import('./components/orderconfirmation/OrderConfirmation.jsx'));
const OrderTracking = React.lazy(() => import('./components/OrderTrack/OrderTrack.jsx'));
const WishList = React.lazy(() => import('./components/WishList/WishList.jsx'));

// Fallback component
const Loading = () => <div>Loading...</div>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AddressProvider>
          <Suspense fallback={<Loading />}>
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
                <Route path="/WishList" element={<WishList />} />
                <Route path="/Registration" element={<Registration />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Logout" element={<Logout />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/ProductPage" element={<ProductPage />} />
              </Route>
            </Routes>
          </Suspense>
        </AddressProvider>
      </Router>
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);
