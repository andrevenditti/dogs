import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../Components/Forms/Input'
import { Button } from '../../Components/Forms/Button'
import useForm from '../../Hooks/useForm'
import { Error } from '../../Components/Helper/Error'
import { UserContext } from '../../Contexts/UserContext'
import styles from './LoginForm.module.css'
import styleBtn from '../../Components/Forms/Button.module.css'

export const LoginForm = () => {
  const username = useForm()
  const password = useForm()
  const { userLogin, error, loading } = React.useContext(UserContext)

  const handleLogin = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <Input {...username} type="text" label="Usuario" name="username" />
        <Input {...password} type="password" label="Senha" name="password" />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.passwordReset} to={'/login/passwordlost'}>
        Perdeu a senha?
      </Link>
      <div className={styles.createAccount}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda nao possui conta? Cadastre-se na plataforma.</p>
        <Link className={styleBtn.button} to={'/login/create'}>
          Cadastro
        </Link>
      </div>
    </section>
  )
}
