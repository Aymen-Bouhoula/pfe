import React, { useState } from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './pages/AppRoutes'

import Home from './pages/Home'
import Contact from './pages/Contact'




const App = () => {

const [connected, setconnected] = useState(!!localStorage.getItem('token'))
const user = connected ? JSON.parse(localStorage.getItem('user')) : null

  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setconnected(false)
  }

  return (

    <div>

      <Navbar logout={logout} connected={connected} user={user} />
      <AppRoutes connected={connected} setconnected ={setconnected} />

    </div>
  )
}

export default App
