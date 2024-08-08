import React from 'react'
import LandingPage from './quickeats/pages/LandingPage'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './quickeats/components/Login';
import ProductMenu from './quickeats/components/ProductMenu';
import About from './quickeats/components/About';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/products/:firmId/:firmName' element={<ProductMenu/>} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  )
}

export default App