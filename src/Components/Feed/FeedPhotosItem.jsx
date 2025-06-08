import React from 'react'
import styles from '../Feed/FeedPhotosItem.module.css'
import { Image } from '../Helper/Image'

export const FeedPhotosItem = ({ photo, onClickPhoto }) => {
  return (
    <li className={styles.photo} onClick={() => onClickPhoto(photo)}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  )
}
