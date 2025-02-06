import React from 'react'
import { UserHeader } from './Components/UserHeader'
import { Outlet } from 'react-router-dom'

export const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Outlet />
    </section>
  )
}
