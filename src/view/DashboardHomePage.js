import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../component/Navbar'

export default function AppRoutes() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  )
}
