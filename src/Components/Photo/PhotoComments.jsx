import React from 'react'
import { PhotoCommentsForms } from './PhotoCommentsForms'
import { UserContext } from '../../Contexts/UserContext'
import styles from './PhotoComments.module.css'

export const PhotoComments = ({ id, comments }) => {
  const [photoComments, setPhotoComments] = React.useState(() => comments)
  const commentsSection = React.useRef(null)
  const { login } = React.useContext(UserContext)

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
    console.log(commentsSection.current.scrollHeight)
  }, [photoComments])

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {photoComments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForms id={id} setPhotoComments={setPhotoComments} />
      )}
    </>
  )
}
