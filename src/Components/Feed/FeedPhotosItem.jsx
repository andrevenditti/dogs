import React from 'react'
import styles from '../Feed/FeedPhotosItem.module.css'

export const FeedPhotosItem = ({ photo, onClickPhoto }) => {
  return (
    <li className={styles.photo} onClick={() => onClickPhoto(photo)}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  )
}
