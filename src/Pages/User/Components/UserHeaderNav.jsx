import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../../Contexts/UserContext'
import FeedIcon from '../../../Assets/feed.svg?react'
import StatsIcon from '../../../Assets/estatisticas.svg?react'
import AddIcon from '../../../Assets/adicionar.svg?react'
import LogoutIcon from '../../../Assets/sair.svg?react'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../../Hooks/useMedia'

export const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext)
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const mobile = useMedia('(max-width: 600px)')

  const { pathname } = useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  )
}
