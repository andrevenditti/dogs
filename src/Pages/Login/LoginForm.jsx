import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../Components/Forms/Input'
import { Button } from '../../Components/Forms/Button'
import useForm from '../../Hooks/useForm'
import Api from '../../api/Api'
import { UserContext } from '../../Contexts/UserContext'

export const LoginForm = () => {
  const username = useForm()
  const password = useForm()
  const { userLogin } = React.useContext(UserContext)

  const handleLogin = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input {...username} type="text" label="Usuario" name="username" />
        <Input {...password} type="password" label="Senha" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to={'/login/criar'}>Cadastro</Link>
      <Api />
    </section>
  )
}
