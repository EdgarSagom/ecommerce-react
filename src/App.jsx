import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MyState from './context/data/myState'
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import ProductInfo from './pages/productInfo/ProductInfo'
import NoPage from './pages/noPage/NoPage'

function App () {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<Order />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/product/:id' element={<ProductInfo />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  )
}

export default App
