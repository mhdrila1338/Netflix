import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'

import SignUp from './components/Signup'
import Signin_initial from './components/signup_1/signup_initial'
import Signup_first_page from './components/signup_1/2_page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin_initial' element={<Signin_initial />} /> //this is signup initial page
      <Route path='2_page.jsx' element={<Signup_first_page />} /> //first page signup
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
