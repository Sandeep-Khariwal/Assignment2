import React from 'react'
import List from './List'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Allusers = () => {
    const navigate = useNavigate()
    const userinfo = useSelector((state)=>state.user.user)
  return (
    <div className='Allusers' >
      <div className='top' >
         <h3>List of All Users</h3>
         <button onClick={()=>{navigate("/create")}}>Create User</button>
      </div>
      <div className='bottom' >
        {
           userinfo && userinfo.map((item,index)=>(<List key={index} id={index} item={item}/>))
        }
      </div>
    </div>
  )
}

export default Allusers
