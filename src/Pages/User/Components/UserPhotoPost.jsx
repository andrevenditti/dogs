import React from 'react'
import styles from './UserPhotoPost.module.css'
import useForm from '../../../Hooks/useForm'
import useFetch from '../../../Hooks/useFetch'
import { Input } from '../../../Components/Forms/Input'
import { Button } from '../../../Components/Forms/Button'
import { PHOTO_POST } from '../../../api'
import { Error } from '../../../Components/Helper/Error'
import { useNavigate } from 'react-router-dom'

export const UserPhotoPost = () => {
  const name = useForm()
  const weight = useForm('number')
  const age = useForm('number')
  const [img, setImg] = React.useState({})
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (data) navigate('/account')
  }, [data, navigate])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append('img', img.raw)
    formData.append('nome', name.value)
    formData.append('peso', weight.value)
    formData.append('idade', age.value)

    const token = window.localStorage.getItem('token')

    const { url, options } = PHOTO_POST(formData, token)
    request(url, options)
  }

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="Peso" type="number" name="weight" {...weight} />
        <Input label="Idade" type="number" name="age" {...age} />
        <input
          type="file"
          name="img"
          id="img"
          aria-label="Escolha um arquivo"
          onChange={handleImgChange}
          className={styles.file}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        {error && <Error error={error} />}
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  )
}
