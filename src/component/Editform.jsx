import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { EditUser } from '../state/userSplice';

const initialize = {
    name:"",
    email:"",
    phone:"",
    address:""
  };

const Editform = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const {name,email,phone,address} = location.state.item
    const id = location.state.id
    const [user,setUser] = useState(initialize)
    const dispatch = useDispatch()

    useEffect(()=>{
        setUser({name,email,phone,address})
    },[])

    const handleChange = (e) =>{
    setUser({...user,[e.target.name]:e.target.value})
    }

    const clickHandler = () =>{
    dispatch(EditUser({id:id , user:user}))
       navigate("/")
    }
  return(
<div className='create'>
    <h1>Edit User Details </h1>
  <form onSubmit={clickHandler} >
   <input onChange={ handleChange } value={user.name} type='text' name='name' required />
    <input onChange={ handleChange } value={user.email} name='email' type='email' required/>
    <input onChange={ handleChange } value={user.phone} name='phone' type='text' minLength={10} maxLength={10} required/>
    <input onChange={ handleChange } value={user.address} type='text' name='address' required /><br/>
    <button type='submit'>Edit</button> 
  </form>
</div>
  )
}

export default Editform
