import React from 'react'
import styles from './PhotoContent.module.css'
import { Link } from 'react-router-dom'
import { PhotoComments } from './PhotoComments'
import { UserContext } from '../../Contexts/UserContext'
import { PhotoDelete } from './PhotoDelete'
import { Image } from '../Helper/Image'

export const PhotoContent = ({ data }) => {
  const user = React.useContext(UserContext)
  const { photo, comments } = data

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.photoDetails}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username == photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.photoAttributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade === 1 ? photo.idade + ' ano' : photo.idade + ' anos'}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  )
}
