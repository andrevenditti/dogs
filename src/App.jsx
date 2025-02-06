import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Home } from './Pages/Home/Home'
import { LoginCreate } from './Pages/Login/LoginCreate'
import { LoginForm } from './Pages/Login/LoginForm'
import { LoginPasswordLost } from './Pages/Login/LoginPasswordLost'
import { LoginPasswordReset } from './Pages/Login/LoginPasswordReset'
import { Login } from './Pages/Login/Login'
import { UserStorage } from './Contexts/UserContext'
import { User } from './Pages/User/User'
import { ProtectedRoute } from './Components/Helper/ProtectedRoute'

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}>
              <Route index element={<LoginForm />} />
              <Route path="criar" element={<LoginCreate />} />
              <Route path="perdeu" element={<LoginPasswordLost />} />
              <Route path="resetar" element={<LoginPasswordReset />} />
            </Route>
            <Route
              path="/conta"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
