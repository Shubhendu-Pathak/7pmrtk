import { configureStore, createSlice } from "@reduxjs/toolkit";


let songsSlice = createSlice({
    name:'song',
    initialState:[],
    reducers:{
        addSong(state,action){
             state.unshift(action.payload)
        },
        removeSong(state,action){
          let index = state.indexOf(action.payload)
           state.splice(index,1)
        }
    }
})

export const store = configureStore({
   reducer:{
    songsStore:songsSlice.reducer
   }
})

export const {addSong,removeSong} = songsSlice.actions
