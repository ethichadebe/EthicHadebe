import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import HomePage from './HomePage.jsx'
import ReactGA from "react-ga4";


ReactGA.initialize("G-XQ85RG5H8X");

// Send pageview with a custom path
ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });


const router = createBrowserRouter([{
  path: "/",
  element:<HomePage/>
},{
  path: "/home",
  element:<HomePage/>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
