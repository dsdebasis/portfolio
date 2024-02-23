import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter([{
  path:"/",element:<App/>,children:[{
    path:"contact",element:<Contact/>
  }]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
