import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunk/fetchusers";



const usersSlice = createSlice({
    name:'users',
    initialState:{
        isLoading:false,
        data:null,
        error:null
    },
   extraReducers(builder){
    builder.addCase(fetchUsers.pending,(state,action)=>{
state.isLoading=true
    })
    builder.addCase(fetchUsers.fulfilled,(state,action)=>{
        state.isLoading=false
        state.data=action.payload
    })
    builder.addCase(fetchUsers.rejected,(state,action)=>{
        state.isLoading=false
        state.data=action.error
    })
   }
})

export const usersReducer = usersSlice.reducer