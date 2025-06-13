import React from 'react'
import { FeedPhotosItem } from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import { Error } from '../Helper/Error'
import { Loading } from '../Helper/Loading'
import styles from './FeedPhotos.module.css'

export const FeedPhotos = ({
  user,
  onClickPhoto,
  page,
  setInfinite,
  totalItems,
}) => {
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page, totalItems, user })
      const { response, json } = await request(url, options)
      console.log(json)
      console.log(json.length < totalItems)
      if (response && response.ok && json.length < totalItems)
        setInfinite(false)
    }
    fetchPhotos()
  }, [request, user, page, setInfinite])

  if (error) return <Error erro={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            onClickPhoto={onClickPhoto}
          />
        ))}
      </ul>
    )
  else return null
}
