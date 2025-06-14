import React from 'react'
import styles from './Image.module.css'

export const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true)

  const handleLoad = ({ target }) => {
    setSkeleton(false)
    target.style.opacity = 1
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img
        onLoad={handleLoad}
        className={styles.img}
        src=""
        alt={alt}
        {...props}
      />
    </div>
  )
}
