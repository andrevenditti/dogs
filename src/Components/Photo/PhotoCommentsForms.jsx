import React from 'react'
import Enviar from '../../Assets/enviar.svg?react'
import useFetch from '../../Hooks/useFetch'
import { COMMENT_POST } from '../../api'
import { Error } from '../Helper/Error'
import styles from './PhotoCommentsForms.module.css'

export const PhotoCommentsForms = ({ id, setPhotoComments }) => {
  const { request, error } = useFetch()
  const [comment, setComment] = React.useState('')

  const token = window.localStorage.getItem('token')

  const handleSubmitComment = async (event) => {
    event.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment }, token)
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setPhotoComments((comments) => [...comments, json])
    }
  }

  return (
    <form className={styles.forms} onSubmit={handleSubmitComment}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
}
