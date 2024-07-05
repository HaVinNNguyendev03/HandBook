// import lib
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import layout
import Header from './layouts/header/index.tsx'
import Footer from './layouts/footer/index.tsx'
// import from components
import Login from './components/from/login/index.tsx'
import './index.css'
import './assets/css/main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
    <Login />
    <Footer />
  </React.StrictMode>,
)
