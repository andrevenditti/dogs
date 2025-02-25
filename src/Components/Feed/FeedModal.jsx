import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api'
import { Error } from '../Helper/Error'
import { Loading } from '../Helper/Loading'
import { PhotoContent } from '../Photo/PhotoContent'

export const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) setModalPhoto(false)
  }

  return (
    <div className={styles.photoModal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}
