import React from 'react'
import { Input } from '../../Components/Forms/Input'
import useForm from '../../Hooks/useForm'
import { Button } from '../../Components/Forms/Button'
import { UserContext } from '../../Contexts/UserContext'
import { Error } from '../../Components/Helper/Error'
import useFetch from '../../Hooks/useFetch'
import { USER_POST } from '../../api'

export const LoginCreate = () => {
  const username = useForm()
  const password = useForm()
  const email = useForm('email')
  const { userLogin } = React.useContext(UserContext)
  const { loading, error, request } = useFetch()

  const handleCreateUser = async (event) => {
    event.preventDefault()

    const { url, options } = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value,
    })
    const { response } = await request(url, options)
    if (response.ok) userLogin(username.value, password.value)
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleCreateUser}>
        <Input {...username} type="text" label="Usuario" name="username" />
        <Input {...email} type="email" label="Email" name="email" />
        <Input {...password} type="password" label="Senha" name="password" />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  )
}
