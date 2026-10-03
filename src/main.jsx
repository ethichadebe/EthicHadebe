import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import HomePage from './HomePage.jsx'
import ReactGA from "react-ga4";


// initialize() already records a page view with the real URL.
ReactGA.initialize("G-XQ85RG5H8X");


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
