import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../../Contexts/UserContext'
import FeedIcon from '../../../Assets/feed.svg?react'
import StatsIcon from '../../../Assets/estatisticas.svg?react'
import AddIcon from '../../../Assets/adicionar.svg?react'
import LogoutIcon from '../../../Assets/sair.svg?react'
import styles from './UserHeaderNav.module.css'

export const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null)
  const { userLogout } = React.useContext(UserContext)

  return (
    <nav className={styles.nav}>
      <NavLink to={'/account'} end>
        <FeedIcon />
        {mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to={'/account/stats'}>
        <StatsIcon />
        {mobile && 'Estatisticas'}
      </NavLink>
      <NavLink to={'/account/post'}>
        <AddIcon />
        {mobile && 'Adicionar foto'}
      </NavLink>
      <button onClick={userLogout}>
        <LogoutIcon />
        {mobile && 'Sair'}
      </button>
    </nav>
  )
}
