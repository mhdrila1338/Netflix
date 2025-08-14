import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import SignUp from './components/Signup';
import Signin_initial from './components/signup_1/signup_initial';
import Signup_first_page from './components/signup_1/2_page';
import SignupThirdPage from './components/signup_1/3_page';
import SignupFourthPage from './components/signup_1/4_page';
import SignupFifthPage from './components/signup_1/5_page';
import SixthPageSignup from './components/signup_1/6_page';
import AfterLoginHome from './components/AfterLoginHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin_initial" element={<Signin_initial />} />
        <Route path="/2_page" element={<Signup_first_page />} />
        <Route path="/3_page" element={<SignupThirdPage />} />
        <Route path="/4_page" element={<SignupFourthPage />} />
        <Route path="/5_page" element={<SignupFifthPage />} />
        <Route path="/6_page" element={<SixthPageSignup />} />
        <Route path="/AfterLoginHome" element={<AfterLoginHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
