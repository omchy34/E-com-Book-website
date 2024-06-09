import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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


const router = createBrowserRouter([
  {
    path: '/E-com-Book-website/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'shop',
        element: <Shop/>
      },
      {
        path: 'Arrivals',
        element: <Arrivals/>
      },
      {
        path: 'Contact',
        element: <Contact/>
      },
      {
        path: 'AddToCart',
        element: <AddToCart/>
      },
      {
        path: 'WishList',
        element: <WishList/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
