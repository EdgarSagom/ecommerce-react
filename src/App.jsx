/* eslint-disable react/prop-types */
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import MyState from './context/data/myState'
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import ProductInfo from './pages/productInfo/ProductInfo'
import AddProduct from './pages/admin/pages/AddProduct'
import UpdateProduct from './pages/admin/pages/UpdateProduct'
import NoPage from './pages/noPage/NoPage'

function App () {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/order' element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
          }
          />
          <Route path='/cart' element={<Cart />} />
          <Route
            path='/dashboard' element={
              <ProtectedRoutesForAdmin>
                <Dashboard />
              </ProtectedRoutesForAdmin>
          }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/product/:id' element={<ProductInfo />} />
          <Route
            path='/addproduct' element={
              <ProtectedRoutesForAdmin>
                <AddProduct />
              </ProtectedRoutesForAdmin>
          }
          />
          <Route
            path='/updateproduct' element={
              <ProtectedRoutesForAdmin>
                <UpdateProduct />
              </ProtectedRoutesForAdmin>
          }
          />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  )
}

export default App

// user
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children
  } else {
    return <Navigate to='/login' />
  }
}

// admin
export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if (admin.user.email === 'esagom@gmail.com') {
    return children
  } else {
    return <Navigate to='/login' />
  }
}
