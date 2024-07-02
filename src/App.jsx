import { useState } from 'react'
import './App.css'
import Login from './pages/auth/Login'
import Navigation from './route/Navigation'


function App() {
 
  return (
    <>
      <div className="flex-container">
         <Navigation />
      </div>
    </>
  )
}

export default App
