import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import About from './About.jsx'
import Product from './Product.jsx'

  let router = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/product",
          element:<Product/>
        }
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
