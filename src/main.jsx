import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './assets/Layout/Main';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Login from './Component/Login/Login';
import Services from './Component/Services/Services';
import Contact from './Component/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      
      {
        path: "/about",
        element: <About></About> ,
      },
      {
        path: "/services",
        element: <Services></Services> ,
      },
      {
        path: "/login",
        element: <Login></Login> ,
      },
      {
        path: "/contact",
        element: <Contact></Contact> ,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
