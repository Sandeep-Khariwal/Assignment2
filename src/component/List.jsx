import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RemoveUser } from '../state/userSplice'

const List = ({id,item}) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

    const onClickHandler= () =>{   
    dispatch(RemoveUser(id,item))
    }

  return (
    <div className='card' >
      <h3>Name :- <span>{item.name}</span> </h3>
      <h3>E-mail :- <span>{item.email}</span> </h3>
      <h3>Phone :- <span>{item.phone}</span> </h3>
      <h3>Address :- <span>{item.address}</span> </h3>

    <div className='btn'>
      <button onClick={()=>navigate("/edit",{state:{id:id,item:item}})}>Edit</button>
      <button onClick={onClickHandler}>Delete</button>
    </div>

    </div>
  )
}

export default List
