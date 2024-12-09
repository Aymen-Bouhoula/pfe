import React, { useState } from 'react'
import { useNavigate } from "react-router"
import httpClient from '../services/httpClient'

const Register = () => {

const [name, setname] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
// const [date, setdate] = useState('')
const navigate = useNavigate()

function reset() {
    setname('')
    setemail('')
    setpassword('')
    // setdate('')
}


  return (
    <div className='div1'>
            <h2 className='h2'>Creaction new account </h2>
      <form className='reg'  onSubmit={async (event)=>{
        event.preventDefault()
        if(!name || ! email || !password) return
        console.log({name,email,password});
        
        await httpClient.post('/users', {
            name,email,password
        })
        reset()
        navigate('/')

      }}>

   

    <div className="mt-3">
        <label> Name</label> <br />
        <input value={name} onChange={(event)=>{
            setname(event.target.value)
        }} 
        type="text" placeholder='Enter your name'/>
    </div>

    <div className="mt-3">
        <label>Email</label> <br />
        <input value={email} onChange={(event)=>{
            setemail(event.target.value)
        }} 
        type="email" placeholder='Enter your email'/>
    </div>

    <div className="mt-3">
        <label>Password</label> <br />
        <input value={password} onChange={(event)=>{
            setpassword(event.target.value)
        }} 
        type="password" placeholder='Enter your password'/>
    </div>

    {/* <div className="mb-3 mt-2">
        <label>Date de naissance</label> <br />
        <input value={date} onChange={(event)=>{
            setdate(event.target.value)
        }} 
        type="date" />
    </div> */}


<div className='mt-3'>
    <button type="submit" className='btn btn-primary'>Create</button>

    <button type="reset" onClick={()=>reset()} className='btn btn-danger'>Annuler</button>
</div>



      </form>
    </div>
  )
}

export default Register
