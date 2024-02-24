import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'

import Tech from "./components/Skills/Tech.jsx"
import About from "./components/About/About.jsx"
import SkilCard from './components/Skills/SkillCard.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='home' element={<SkilCard/>}/>
    <Route path='service' element={<Tech/>}/>
    <Route path='about' element={<About/>} />
    <Route path='contact' element={<Contact/>}/>
    <Route path='contact' element={<Contact />} />
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
