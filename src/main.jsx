import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import './main.css'
import Main_center from './components/main_center.jsx'
import SimpleSlider from './components/NetflixScroll.jsx'
import TextArea from './components/textArea.jsx'
import SignInPage from './components/SignInPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
