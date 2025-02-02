import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Home } from './Pages/Home/Home'
import { Login } from './Pages/Login/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
