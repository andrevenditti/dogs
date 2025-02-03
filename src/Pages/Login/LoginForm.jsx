import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../Components/Forms/Input'
import { Button } from '../../Components/Forms/Button'
import useForm from '../../Hooks/useForm'

export const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const handleLogin = (event) => {
    event.preventDefault()
    console.log({ username, password })

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response)
          return response.json()
        })
        .then((json) => console.log(json))
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
    </section>
  )
}
