import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from './AdminPage'
import Login from './Login'
import Signup from './Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<AdminPage/>} />
    </Routes>
  )
}

export default AllRoutes