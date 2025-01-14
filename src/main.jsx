import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import HomePage from './HomePage.jsx'
import Book from './components/Book/Book'

const router = createBrowserRouter([{
  path: "/",
  element:<HomePage/>
},{
  path: "/home",
  element:<HomePage/>
},{
  path: "/books/:book_name",
  element:<Book/>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
