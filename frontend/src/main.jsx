import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Register from './Components/Auth/Register/Register.jsx'
import Profile from './Components/Profile/Profile.jsx'
import './index.css'
import HomePage from './Components/HomePage/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Profile />
    <HomePage/>
  </StrictMode>,
)
