import React from 'react'
import { Input } from '../../Components/Forms/Input'
import useForm from '../../Hooks/useForm'
import { Button } from '../../Components/Forms/Button'
import { UserContext } from '../../Contexts/UserContext'
import { Error } from '../../Components/Helper/Error'

export const LoginCreate = () => {
  const username = useForm()
  const password = useForm()
  const email = useForm('email')
  const { error, loading, userCreate, userLogin } =
    React.useContext(UserContext)

  const handleCreateUser = (event) => {
    event.preventDefault()

    if (username.validate() && password.validate() && email.validate()) {
      userCreate(username.value, password.value, email.value)
    }
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
