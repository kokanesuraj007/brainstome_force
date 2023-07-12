import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  DataGrid from './DataGrid'
import { HomePage } from './HomePage'
import { Login } from './Login'
import { Register } from './Register'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/capsule" element={<DataGrid/>}></Route>
    </Routes>
  )
}
