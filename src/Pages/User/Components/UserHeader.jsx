import React from 'react'
import { UserHeaderNav } from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

export const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const { pathname } = useLocation()

  React.useEffect(() => {
    switch (pathname) {
      case '/account':
        setTitle('Minhas fotos')
        break
      case '/account/stats':
        setTitle('Estatisticas')
        break
      case '/account/post':
        setTitle('Postar uma foto')
        break
    }
  }, [pathname])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}
