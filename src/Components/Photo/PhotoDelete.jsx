import React from 'react'
import styles from './PhotoDelete.module.css'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch'

export const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch()

  const handleClick = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      if (response.ok) window.location.reload()
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  )
}
