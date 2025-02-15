import React from 'react'
import { FeedPhotosItem } from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import { Error } from '../Helper/Error'
import { Loading } from '../Helper/Loading'
import styles from './FeedPhotos.module.css'

export const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 0, totalItems: 6, user: 0 })
      const { json } = await request(url, options)
      console.log(json)
    }
    fetchPhotos()
  }, [request])

  if (error) return <Error erro={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    )
  else return null
}
