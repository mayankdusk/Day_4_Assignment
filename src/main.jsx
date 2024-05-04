import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Icons from './Components/Icons/Icons.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Icons />
  </React.StrictMode>,
)
