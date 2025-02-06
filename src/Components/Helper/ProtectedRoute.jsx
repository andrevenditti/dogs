import React from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext)
  if (login === true) {
    return children
  } else if (login === false) {
    return <Navigate to={'/login'} />
  } else {
    return <></>
  }
}
