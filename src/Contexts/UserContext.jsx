import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api'
import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [login, setLogin] = React.useState(false)
  const [error, setError] = React.useState(null)
  const navigate = useNavigate()

  const getUser = async (token) => {
    const { url, options } = USER_GET(token)
    const userResponse = await fetch(url, options)
    const json = await userResponse.json()
    setData(json)
    setLogin(true)
    console.log(json)
  }

  const userLogin = async (username, password) => {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = TOKEN_POST({ username, password })
      const tokenRes = await fetch(url, options)
      console.log(tokenRes)
      if (!tokenRes.ok) throw new Error(`Usuario invalido`)
      const { token } = await tokenRes.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/conta')
    } catch (error) {
      setError(error.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  const userLogout = async () => {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')
    navigate('/')
  }

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token')
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if (!response.ok) throw new Error('Token Invalido')
          await getUser(token)
        } catch (error) {
          userLogout()
        } finally {
          setLoading(false)
        }
      }
    }
    autoLogin()
  }, [])

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  )
}
