import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Products from './Products'
import Profil from './Profil'
import Settings from './Settings'
import Calcule from '../components/Calcule'

import Login from '../components/Login'
import Register from '../components/Register'
import AddProduct from '../components/AddProduct'



function ProtectedRoute({connected , element}) {
   return connected ? element : <Navigate to='/' /> 
}

const AppRoutes = ({connected , setconnected}) => {



  return (

    <div>
        <Routes>

    <Route path='/' element={<Home/>} />

    <Route path='/contact' element={<Contact/>} />

    <Route path='/products' element={<ProtectedRoute connected={connected} element={<Products/>} />} />

    <Route path='/settings' element={<Settings/>} />

    <Route path='/calcul' element={<Calcule/>} />

    <Route path='/add' element={ <ProtectedRoute  connected={connected}  element={<AddProduct/>} />} />



    <Route path='/profil' element={<ProtectedRoute connected={connected} element= {<Profil/>}/>}  />

    <Route path='/login' element={<Login setconnected={setconnected} />} />



    <Route path='/register' element={<Register/>} />


        </Routes>


    </div>
  )
}

export default AppRoutes
