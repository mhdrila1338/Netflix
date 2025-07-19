import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import './main.css'
import Main_center from './components/main_center.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main_center />
    <App />
    <Footer />
  </StrictMode>,
)
