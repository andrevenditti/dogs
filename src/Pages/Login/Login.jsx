import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'
import styles from './Login.module.css'

export const Login = () => {
  const { login } = React.useContext(UserContext)
  if (login === true) return <Navigate to={'/conta'} />
  return (
    <div className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <Outlet />
      </div>
    </div>
  )
}
