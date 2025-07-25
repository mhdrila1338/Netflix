import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='lOGIN' element={<Login />} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
