import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // ✅ Ye Import zaroori hai!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ✅ App ko yahan Router mein wrap karenge */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)