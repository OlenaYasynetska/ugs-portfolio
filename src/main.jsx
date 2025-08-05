import './i18n';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailjs from 'emailjs-com'

import './global.css'
import App from './components/App/App.jsx'

// Инициализация EmailJS
emailjs.init('6GTgM1iT4JuZOh4G_');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
