import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'

export const Login = () => {
  const { login } = React.useContext(UserContext)
  if (login === true) return <Navigate to={'/conta'} />
  return (
    <div>
      <Outlet />
    </div>
  )
}
