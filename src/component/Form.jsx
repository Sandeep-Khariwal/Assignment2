import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddUser } from '../state/userSplice';

const initialize = {
    name:"",
    email:"",
    phone:"",
    address:""
  };


const Form = () => {
    const [user,setUser] = useState(initialize)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleChange = (e) =>{
    e.preventDefault()
    setUser({...user,[e.target.name]:e.target.value})
    }

    const clickHandler = (e) =>{
    e.preventDefault()
    dispatch( AddUser(user) )
    
    navigate("/")
    }


  return (
    <div className='create'>
    <h1>Create User</h1>
  <form onSubmit={clickHandler} >
   <input onChange={ handleChange } type='text' name='name'placeholder='Enter username' required />
    <input onChange={ handleChange } name='email' type='email' placeholder='E-mail' required/>
    <input onChange={ handleChange } name='phone' type='text' minLength={10} maxLength={10} placeholder='Phone Number' required/>
    <input onChange={ handleChange } type='text' name='address' placeholder='Enter your address' required /><br/>
    <button type='submit'>Create</button> 
  </form>
</div>
  )
}

export default Form
