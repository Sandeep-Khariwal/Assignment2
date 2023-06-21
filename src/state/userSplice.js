import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[]
} 

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        AddUser:(state , action)=>{
        state.user.push(action.payload)
        },
        RemoveUser:(state,action)=>{
            const uid = action.payload
            const setUser = state.user.filter((_,index)=> index !== uid)
            state.user = setUser
        },
        EditUser:(state,action)=>{
        const {id , user} = action.payload
        state.user.map((data,index)=>{
            if(index === id ){ 
               data.name = user.name
               data.email = user.email
               data.phone = user.phone
               data.address = user.address
            }
        })
        }
    }
})

export const { AddUser , RemoveUser , EditUser } = userSlice.actions
export default userSlice.reducer